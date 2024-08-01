import React, { useState, useRef, useEffect } from 'react';
import { shopping } from '../data/Shopping';
import { BsSearch } from "react-icons/bs";
import {  useNavigate } from "react-router-dom";


const Searchinput = () => {
  let navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  
  const searchBoxRef = useRef(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform the search logic here
    const lowerCaseQuery = query.toLowerCase();
    const filteredItems = shopping.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery)
    );

    // Pass the filtered items to the parent component via the onSearch callback
    //     onSearch(filteredItems);

    // Update the dropdown items
    setDropdownItems(filteredItems);

    // Show or hide the dropdown based on search results and non-empty search query
    setShowDropdown(filteredItems.length > 0 && query.trim() !== "");
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // const handleClick = () => {
  //   setShowDropdown(false);
  // };

  
    const productDetail = (item) => {
      navigate('/details');
      localStorage.setItem('productdetail', JSON.stringify(item));
    };
  

  return (
    <div className="lg:w-[30%] w-[70%] flex items-center relative" ref={searchBoxRef}>
      {/* Search Box */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setShowDropdown(true)}
        // onBlur={() => setShowDropdown(false)}
        placeholder="Search..."
        className="lg:w-[100%] w-[70%] lg:ms-[0%] ms-2 border border-gray-300 rounded-s-sm px-2 py-1 text-black"
      />
      <div className=" dark:bg-gray-600 bg--600 py-[6.5px] px-[8px] my-auto flex justify-center rounded-e-sm cursor-pointer">
        <BsSearch className="cursor-pointer text-white" size={24} />
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="flex flex-col absolute w-[95%] h-[500px] top-full left-0 bg-white border border-gray-300 rounded-sm mt-0 p-2 overflow-y-auto">
          {dropdownItems.length === 0 ? (
            <div className="text-gray-500">
              Sorry, we couldn't find any results
            </div>
          ) : (
            dropdownItems.map((item, index) => (
              <div onClick={()=> productDetail(item)} key={index}  className="flex gap-5 cursor-pointer hover:bg-gray-100 p-1 rounded-sm border-b border-gray-300 text-black w-[full] mb-3">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-[30px] h-[30px]"
                />{" "}
                <span>{item.title}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Searchinput;
