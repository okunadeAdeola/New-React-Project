import React, { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr'
import Shopheader from './Shopheader';
import Shopfooter from './Shopfooter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increment } from '../Redux/counterSlice';
import Swal from 'sweetalert2'; 


const Shoppingdetail = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.counterReducer.cart);
  

  let storage = JSON.parse(localStorage.getItem('productdetail'));
  

  const [storageData, setStorageData] = useState({});
  const [mainImage, setMainImage] = useState('')

  useEffect(() => {
    setStorageData(storage);
  }, []);

  
const addCart = () => {
  Swal.fire({ 
    icon: 'success',
    title: 'Product added successfully',
    showConfirmButton: false,
    timer: 1500 
  });


  const productItem = cartProduct.find((item) => item.id === storage.id);
  if (productItem) {
    dispatch(increment(productItem.id));
  } else {
    let newCart = {
      owner: storage.owner,
      title: storage.title,
      id: storage.id,
      price: storage.price,
      cartQuantity: 1,
      availableQuantity:storage.quantity,
      photo: storage.photo,
      photo2: storage.photo2,
      photo3: storage.photo3,
      photo4: storage.photo4,
      summaries: storage.summaries,
      categories: storage.categories,
    };
    // console.log(newCart);
    dispatch(addToCart(newCart));
  }
};




  const images = [storageData.photo, storageData.photo3, storageData.photo2, storageData.photo4];
  const length = images.length;


  const handleImageClick =(newImage)=>{
    console.log(newImage);
    setMainImage(newImage)
  }

  return (
    <>
      <Shopheader />
      <div className='mt-[11%] grid lg:grid-cols-2 grid-cols-1 lg:px-20'>
        <div className="px-5 lg:ms-[10%] ms-[3%]">
        {
            mainImage ?
            <img className="w-[355px] h-[200px] my-5 lg:mt-0 mt-16" src={mainImage} alt="Main" />
            :
            <img
            className="w-[355px] h-[200px] my-5 lg:mt-0 mt-16"
            src={storageData.photo}
            alt="Thumbnail"
          />
        }
        <div className="flex gap-3">
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo2}
            alt="Thumbnail"
            onClick={() => handleImageClick(storageData.photo2)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo3}
            alt="Thumbnail 1"
            onClick={() => handleImageClick(storageData.photo3)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo4}
            alt="Thumbnail 3"
            onClick={() => handleImageClick(storageData.photo4)}
          />
          <img
            className="cursor-pointer w-[80px] h-[60px]"
            src={storageData.photo}
            alt="Thumbnail 4"
            onClick={() => handleImageClick(storageData.photo)}
          />
        </div>
      </div>














        
        <div className='lg:ms-[10%] ms-10 mt-10'>
          <div className='text-xl font-semibold mt-2'>{storageData.title}</div>
          <div className='text-xl font-bold mt-2 text-gray-600'>{storageData.categories}</div>
          <div className='mt-2'>${storageData.price}</div>
          <div className='mt-2 text-sm'>{storageData.summaries}</div>
          <button className='bg-gray-600 lg:w-[50%] w-[89%] p-2 mt-10 text-white rounded font-bold' onClick={addCart}>ADD TO CART</button>
        </div>

      </div>
      <Shopfooter />
    </>
  );
};

export default Shoppingdetail;
