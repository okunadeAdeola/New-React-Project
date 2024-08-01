import React, { useContext, useEffect, useState } from 'react';
import { GiCartwheel } from 'react-icons/gi';
// import { FiShoppingCart } from 'react-icons/fi'; // Updated icons
import { BsSun } from 'react-icons/bs';
import { BiSolidMoon } from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import { AppContext } from './context/Dashboard';
import { AppContext } from '../context/Dashboard';
import Carty from './Carty';
import Searchinput from './Searchinput';
import image7 from '../assets/image7.jpg'
import { useSelector } from 'react-redux';


const Header = () => {
    // console.log(userCart);
    const { theme, setTheme } = useContext(AppContext)
    // console.log(theme);

    const store = useSelector((state)=> state.counterReducer.cart);
    //   console.log(store);
    
    const [cartQuantity, setCartQuantity] = useState("")
    
    
      useEffect(() => {
        const updatedCartQuantity = store.reduce((total, store) => total + store.cartQuantity, 0);
        // console.log(updatedCartQuantity);
        setCartQuantity(updatedCartQuantity)
    }, [store]);
   

    

    return (
        <div className='p-4 ms-[-15px] flex justify-between  text-gray-600 dark:text-gray-900 bg-white fixed top-0 w-full font-bold font-serif position-sticky z-50 top-0'>
            <Link to="/fashion" className='flex items-center gap-1'>
                
                <img src={image7} alt="" className='h-8 w-8 border border-gray-600 dark:border-gray-900 rounded-full' />
                <span className='font-bold lg:text-xl text-sm'>Adey Square</span>
            </Link>
            <Searchinput  />
            <div className='flex'>
                <div className='flex lg:me-5 font-bold font-serif lg:gap-2 mt-3'>
                    <span className='lg:text-xl text-sm'></span>
                    <div className='mt-1'>
                        {
                            theme === 'dark' ?
                                <BiSolidMoon id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("light")} /> :
                                <BsSun id='moon' size={17} className='cursor-pointer' onClick={() => setTheme("dark")} />
                        }
                    </div>
                    
                    <Carty/>
                    <span className='text-sm'>{cartQuantity ? cartQuantity : ''}</span>
                </div>
           
            </div>
          
            </div>
    )
}

export default Header