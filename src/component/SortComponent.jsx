import React from 'react';

const SortComponent = ({ handleSort }) => {

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };


  const sortedProducts = [...shuffledShopping].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'category':
        return a.categories.localeCompare(b.categories);
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className='mt-28'>
      <label className='text-black mt-28' htmlFor="sort">Sort By:</label>
      <select id="sort" onChange={(e) => handleSort(e.target.value)}>
        <option value="price">Price</option>
        <option value="name">Name</option>
        <option value="category">Category</option>
        <option value="alphabetical">A-Z</option>
      </select>



      
    </div>
  );
};

export default SortComponent;
