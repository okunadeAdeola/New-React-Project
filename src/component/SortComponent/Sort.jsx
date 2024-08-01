import React, { useState } from "react";
import SortByCategories from "./SortByCategories";
import SortByPrices from "./SortByPrices";
import SortByNames from "./SortByNames";
import SortMenu from "./SortMenu";

const Sort = ({ shuffledShopping, currentItems, setCurrentItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedName, setSelectedName] = useState("all");

  // const filterCollectionByCategory = (category) => {
  //   setSelectedCategory(category);
  //   const filtered = shuffledShopping.filter(
  //     (item) => category === "all" || item.category === category
  //   );
  //   setCurrentItems(filtered);
  // };

  // const filterCollectionByPriceRange = (priceRange) => {
  //   setSelectedPriceRange(priceRange);
  //   const filtered = shuffledShopping.filter(
  //     (item) =>
  //       priceRange === "all" ||
  //       (parseFloat(item.price) >= priceRange.min &&
  //         parseFloat(item.price) <= priceRange.max)
  //   );
  //   setCurrentItems(filtered);
  // };

  // const filterCollectionByName = (name) => {
  //   setSelectedName(name);
  //   const filtered = shuffledShopping.filter(
  //     (item) => name === "all" || item.title === name
  //   );
  //   setCurrentItems(filtered);
  // };

  return (
    <>
      <section
        className={`w-full mb-6 md:mb-12 lg:mt-[2%]  py-5 px-4 md:px-[11%] lg:px-[6.5%] flex gap-3 shadow-md bg-sort-background justify-between text-white font-bold z-10 overflow-x-scroll lg:z-[unset] lg:overflow-x-hidden`}
      >
        <SortMenu
          setSelectedCategory={setSelectedCategory}
          shuffledShopping={shuffledShopping}
          selectedCategory={selectedCategory}
          setCurrentItems={setCurrentItems}
        />

        <SortByCategories
          setSelectedCategory={setSelectedCategory}
          shuffledShopping={shuffledShopping}
          selectedCategory={selectedCategory}
          setCurrentItems={setCurrentItems}
          // filterCollectionByCategory={filterCollectionByCategory}
        />

        <SortByNames
          setSelectedName={setSelectedName}
          shuffledShopping={shuffledShopping}
          selectedName={selectedName}
          // filterCollectionByName={filterCollectionByName}
          setCurrentItems={setCurrentItems} 
        />

        <SortByPrices
          setSelectedPriceRange={setSelectedPriceRange}
          shuffledShopping={shuffledShopping}
          selectedPriceRange={selectedPriceRange}
          // filterCollectionByPriceRange={filterCollectionByPriceRange} 
          setCurrentItems={setCurrentItems}
        />
      </section>
    </>
  );
};

export default Sort;