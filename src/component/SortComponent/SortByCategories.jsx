import React, { useState } from "react";
import { shopping } from "../../data/Shopping";

const SortByCategories = ({setCurrentItems, shuffledShopping}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const  [currentPage, setCurrentPage]   = useState([]);

  const uniqueCategories = [...new Set(shopping.map((item) => item.categories))];

  const filterCollection = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setCurrentPage(shopping);
    } else {
      const filtered = shuffledShopping.filter((item) => item.categories === category);
      setCurrentItems(filtered);
      console.log(filtered);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Category:</div>
        <select
          value={selectedCategory}
          onChange={(e) => filterCollection(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border focus:bg-black"
        >
        
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SortByCategories;