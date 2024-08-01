import React, { useEffect, useState } from 'react';
import { shopping } from '../data/Shopping';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import CustomPagination from './CustomPagination';
import FilterComponent from './FilterComponent';

const Shop = () => {
  let navigate = useNavigate();
  const [shuffledShopping, setShuffledShopping] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentItems, setCurrentItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [filterType, setFilterType] = useState("Greater than");
  const [filterValue, setFilterValue] = useState("");
  const [openQuantity, setOpenQuantity] = useState(false);
  const [filterQuantityType, setFilterQuantityType] = useState("Greater than");
  const [filterQuantityValue, setFilterQuantityValue] = useState("");

  const [formFilters, setFormFilters] = useState({
    title: "",
    category: "",
  });


  const itemsPerPage = 10;

  useEffect(() => {
    const shuffleArray = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
    const shuffledArray = shuffleArray([...shopping]);
    setShuffledShopping(shuffledArray);
  }, [shopping]);

  useEffect(() => {
    const filteredProducts = shuffledShopping.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCurrentItems(filteredProducts);
  }, [searchQuery, shuffledShopping]);

  const productDetail = (item) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(item));
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };


  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormFilters({ ...formFilters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected formFilters:", formFilters);
    // Perform filtering logic here...
    filterCatalogueProduct();
    setFormFilters({ ...formFilters });
  };

  // For Price
  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (value) => {
    setFilterType(value);
    setOpen(false);
  };

  const onFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };


  // For Quantity
  const handleQuantityClick = (value) => {
    setFilterQuantityType(value);
    setOpenQuantity(false);
  };

  const toggleQuantityDropdown = () => {
    setOpenQuantity(!openQuantity);
  };
  const onFilterQuantityChange = (e) => {
    setFilterQuantityValue(e.target.value);
  };

  const symbolMap = {
    "Greater than": ">",
    "Greater than or equal": ">=",
    Is: "=",
    "Less than": "<",
    "Less than or equal": "<=",
    "is not": "!=",
  };


  const quantityMap = {
    "Greater than": ">",
    "Greater than or equal": ">=",
    Is: "=",
    "Less than": "<",
    "Less than or equal": "<=",
    "is not": "!=",
  };


  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = currentItems.slice(startIndex, endIndex);
  const pageCount = Math.ceil(currentItems.length / itemsPerPage);



  const filterCatalogueProduct = () => {
    let filteredItems = [...shuffledShopping];

    if (formFilters.title.trim() !== "") {
      filteredItems = filteredItems.filter((item) =>
        item.title && item.title.toLowerCase().includes(formFilters.title.toLowerCase())
      );
    }

    if (formFilters.category !== "") {
      filteredItems = filteredItems.filter(
        (item) => item.category && item.category.toLowerCase() === formFilters.category.toLowerCase()
      );
    }



   

    // PRICE FILTER
    if (filterType && filterValue !== "") {
      if (filterType === "Greater than") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) > parseFloat(filterValue)
        );
      } else if (filterType === "Greater than or equal") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) >= parseFloat(filterValue)
        );
      } else if (filterType === "Is") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) === parseFloat(filterValue)
        );
      } else if (filterType === "Less than") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) < parseFloat(filterValue)
        );
      } else if (filterType === "Less than or equal") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) <= parseFloat(filterValue)
        );
      } else if (filterType === "Is not") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.price) != parseFloat(filterValue)
        );
      }
    }

    // QUANTITY FILTER
    if (filterQuantityType && filterQuantityValue !== "") {
      if (filterQuantityType === "Greater than") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty || item.quantity) > parseFloat(filterQuantityValue)
        );
      }
      else if (filterQuantityType === "Greater than or equal") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty) || item.quantity >= parseFloat(filterQuantityValue)
        );
      } else if (filterQuantityType === "Is") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty || item.quantity) === parseFloat(filterQuantityValue)
        );
      } else if (filterQuantityType === "Less than") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty || item.quantity) < parseFloat(filterQuantityValue)
        )
      }
      else if (filterQuantityType === "Less than or equal") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty || item.quantity) <= parseFloat(filterQuantityValue)
        )
      } else if (filterQuantityType === "Is not") {
        filteredItems = filteredItems.filter(
          (item) => parseFloat(item.qty || item.quantity) != parseFloat(filterQuantityValue)
        )
      }

    }
    // here, we return our search into our currentitems which is the usestate responsible for our rendering
    setCurrentItems(filteredItems);
  }

  return (
    <>
      <Header />
      <input className='lg:mt-[8%] mt-[20%] w-[100%] lg:ms-[35%] lg:w-[30%] md:w-[70%] md:ms-[15%] md:mt-[10%] lg:mb-0 mb-10 border border-gray-300 rounded-s-sm px-2 py-1 text-black focus:outline-gray-500 focus:border-gray-500'
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {paginatedItems.length === 0 ? '' :
        <CustomPagination
          pageCount={pageCount}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={currentItems.length}
        />
      }
      {/* Forms */}
      <FilterComponent
          open={open}
          toggleDropdown={toggleDropdown}
          handleOptionClick={handleOptionClick}
          symbolMap={symbolMap}
          filterType={filterType}
          filterValue={filterValue}
          onFilterValueChange={onFilterValueChange}
          formFilters={formFilters}
          handleFormInputChange={handleFormInputChange}
          handleSubmit={handleSubmit}
          openQuantity={openQuantity}
          toggleQuantityDropdown={toggleQuantityDropdown}
          handleQuantityClick={handleQuantityClick}
          quantityMap={quantityMap}
          filterQuantityType={filterQuantityType}
          filterQuantityValue={filterQuantityValue}
          onFilterQuantityChange={onFilterQuantityChange}
        />

      <h1 className='text-center text-2xl my-5 text-white font-semibold'>
        {paginatedItems.length === 0 ? '' : 'SHOPPING CATEGORY'}
      </h1>
      <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4 dark:text-gray-600 text-gray-600 lg:p-0 p-5'>
        {paginatedItems.length === 0 ? (
          <div className="text-white text-xl lg:w-[500px] lg:ms-[450px] lg:mb-[150px]">
            Sorry, we couldn't find any results
          </div>
        ) : (
          paginatedItems.map((item, i) => (
            <div
              onClick={() => productDetail(item)}
              className='bg-dark text-sm rounded-lg lg:p-2 p-5 shadow-md cursor-pointer h-[495px]'
              key={i}
            >
              <img src={item.photo} alt={item.title} className='w-40 h-30 object-cover rounded-md mx-auto hover:scale-110' />
              <h1 className='text-xl font-semibold mt-4 text-light'>{item.title}</h1>
              <p className='mt-2 text-light '>{item.categories}</p>
              <p className=' mt-2 text-light'>{item.summaries}</p>
              <p className='text-green-600 font-semibold mt-2 text-light'>${item.price}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Shop

