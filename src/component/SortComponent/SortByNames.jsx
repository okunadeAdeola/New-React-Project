import React, { useState } from "react";
import { shopping } from "../../data/Shopping";

const SortByNames = ({ setCurrentItems, shuffledShopping }) => {
  const [selectedName, setSelectedName] = useState(""); // State for selected name

  // Filter products by name


  const filterCollectionByName = (name) => {
    setSelectedName(name);
    const filtered = shuffledShopping.filter(
      (item) => name === "all" || item.title === name
    );
    setCurrentItems(filtered);
  };

  return (
    <>
      <div className="flex">
        <div className="my-auto sm:text-xs lg:text-base mr-2">Name:</div>
        <select
          value={selectedName}
          onChange={(e) => filterCollectionByName(e.target.value)}
          className="rounded-md p-2 sm:text-xs lg:text-base bg-transparent border focus:bg-black"
        >
          
          {shopping.map((item, index) => (
            <option key={index} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SortByNames;