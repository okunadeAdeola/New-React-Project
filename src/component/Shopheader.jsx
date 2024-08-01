import React, { useContext, useEffect, useState } from 'react';
import { GiCartwheel } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Carty from './Carty';
import { useSelector } from 'react-redux';


const Shopheader = () => {
    const store = useSelector((state)=> state.counterReducer.cart);


const [cartQuantity, setCartQuantity] = useState("")


  useEffect(() => {
    const updatedCartQuantity = store.reduce((total, store) => total + store.cartQuantity, 0);
    
    setCartQuantity(updatedCartQuantity)
}, [store]);

    return (
        <div className='p-4 z-20 flex justify-between bg-gray-600 text-white fixed top-0 w-full font-bold font-serif'>
            <Link to="/fashion" className='flex items-center gap-1'>
                <GiCartwheel size={25} className='' />
                <span className='font-bold text-xl'>Adey Square</span>
                </Link>
                <div className='flex'>
                <div className='flex lg:me-5 font-bold font-serif mt-3'>
                <span className='lg:me-5 me-5'>Item</span>
                <Carty/>
                <span className='text-sm'>{cartQuantity ? cartQuantity : ''}</span>
                </div>
            </div>
        </div>
    )
}

export default Shopheader