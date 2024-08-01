import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'



const Carty = () => {
    let navigate = useNavigate()
    
    const userCart =()=>{
        navigate('/cart')
      }
  return (
    <div> <button className='' onClick={()=> userCart()}><BsCart4 /></button>
    
    </div>
 
  )
}

export default Carty