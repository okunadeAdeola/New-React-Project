import React from 'react';
import { collection } from '../data/Data';
import { useNavigate } from 'react-router-dom';
import Footer from '../FooterComponent/Footer';


const Product = () => {

  let navigate = useNavigate()

  const productDetail = (e) => {
    navigate('/details');
    localStorage.setItem('productdetail', JSON.stringify(e));
  };

  return (
    <>
     
      
      <Footer />
    </>
  );
};

export default Product;
