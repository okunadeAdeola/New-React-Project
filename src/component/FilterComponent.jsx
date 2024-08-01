import React from "react";
import { FaCaretDown } from "react-icons/fa";

const FilterComponent = ({
//   filterOpen,
//   setfilterOpen,
  open,
  toggleDropdown,
  handleOptionClick,
  symbolMap,
  filterType,
  filterValue,
  onFilterValueChange,
  formFilters,
  handleFormInputChange,
  handleSubmit,
  openQuantity,
  toggleQuantityDropdown,
  handleQuantityClick,
  quantityMap,
  filterQuantityType,
  filterQuantityValue,
  onFilterQuantityChange,
}) => {

    
  return (
    <div className=" text-white">
       {/* Forms */}
       <form
          className="w-full grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-5 md:gap-10 my-4 lg:ms-[1%] lg:px-10 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
           <label htmlFor="name">Ttile</label>
          <input
            className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent bg-white h-[35px] w-[85%] outline-none text-black"
            type="text"
            placeholder="e.g  obsession for men"
            name="title"
            value={formFilters.title}
            onChange={handleFormInputChange}
          />
          </div>
          <div className="flex flex-col">
           <label htmlFor="name">Category</label>
          <input
            className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent bg-white h-[35px] w-[85%] outline-none text-black"
            type="text"
            placeholder="e.g  calvin klein"
            name="category"
            value={formFilters.category}
            onChange={handleFormInputChange}
          />
          </div>
          <div>
            <p>Price</p>
            <div className="flex h-[58%]">
              <div className="relative w-[18%] bg-white border-r-1 border-black rounded-l">
                  <div
                    className="flex text-black cursor-pointer px-1 py-1 border-gray-300"
                    onClick={toggleDropdown}
                  >
                    <div>
                      <FaCaretDown className="mt-[5px]" />
                    </div>
                  {symbolMap[filterType]}
                </div>
                {open && (
                  <div className="absolute py-1  w-[500%] bg-white text-black border">
                    {Object.keys(symbolMap).map((key) => (
                      <div
                        key={key}
                        className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleOptionClick(key)}
                      >
                        {key}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                className="text-black w-[70%] px-4 py-1 rounded-r outline-none"
                type="number"
                placeholder="e.g  $250"
                value={filterValue}
                onChange={onFilterValueChange}
              />
            </div>

          </div>
          {/* QUANTITY DROPDOWN */}
          <div>
              <p>Quantity</p>
              <div className="flex h-[58%]">
              <div className="relative w-[18%] bg-white border-r-1 border-black rounded-l">
                  <div
                    className="flex text-black cursor-pointer px-2 py-1 border-gray-300"
                    onClick={toggleQuantityDropdown}
                  >
                    <div className="">
                      <FaCaretDown className="mt-[5px]" />
                    </div>

                    <div>{quantityMap[filterQuantityType]}</div>
                  </div>
                  {openQuantity && (
                    <div className="absolute  w-[500%] bg-white text-black border border-gray-300">
                      {Object.keys(quantityMap).map((key) => (
                        <div
                          key={key}
                          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleQuantityClick(key)}
                        >
                          {key}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div></div>
                <input
                  className="text-black w-[70%] px-4 py-1 rounded-r outline-none"
                  type="number"
                  placeholder="e.g  200"
                  value={filterQuantityValue}
                  onChange={onFilterQuantityChange}
                />
              </div>
          
              </div>
          <button
            className="bg-white rounded border hover:bg-[#089451] hover:text-white hover:border-white text-[#089451] w-[40%] lg:mt-6 h-[35px]"
            type="submit"
            >
            Search
          </button>
          
        </form>
      
    </div>
  );
};

export default FilterComponent;