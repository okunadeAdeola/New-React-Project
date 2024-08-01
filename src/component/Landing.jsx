import React from 'react'
import landingimage from '../assets/land.jpg'

import image7 from '../assets/image7.jpg'
import { Link } from 'react-router-dom'
import adeyBoutique from '../assets/Adey.png'
import cap from '../assets/cap.jpg'
import shoe from '../assets/shoe.jpg'
const Landing = () => {
  return (
    <>

    <nav style={{backgroundColor:'#000000',color:'#ffffff', height:'70px', width:'100%',position:'sticky', display:'flex', top:'0', zIndex:'300'}} className="nav        ">
    <Link to="/" className='flex items-center gap-1 px-[6%]'>
                
                <img src={adeyBoutique} alt="" className='h-8 w-8 border border-pink-600 dark:border-pink-900 rounded-full' />
                <span className='font-bold lg:text-xl text-sm'>Adey Square</span>
            </Link>
       <Link to="/signup" style={{marginLeft:'56%', marginTop:'10px',  color:"white", padding:'5px', width:'80px', textAlign:'center', justifyContent:'center', fontSize:'20px', fontWeight:'bolder'}}><button>Sign up</button></Link>
        <Link to="/login" style={{fontSize:'20px', fontWeight:'bolder',textAlign:'center', justifyContent:'center', marginTop:'15px', marginLeft:'25px'}}>Login</Link>
        
    </nav>
     <div className='container'>
     <div className="row d-flex">
        <div className="col-lg-6">
            <div style={{marginTop:'100px', fontSize:'50px', fontWeight:'bold', paddingLeft:'10px'}}>
              <h1>The Biggest Sales
                <br />Category
              <span className='typingcss'></span>
              </h1>
              <p style={{fontSize:'20px', fontWeight:'bold', paddingLeft:'10px'}}>Get the best deals on the biggest sales category click on the <br /> button below to sign up</p>
              <button className='btn btn-primary '><Link to='/signup'>Get Started</Link></button>
            </div>
        </div>
        <div className="col-lg-6 ">
        <div  class="card">
  <div class="container"> 
  <div class="card-header">
    <span><img src={adeyBoutique} alt="" className='landimage' /></span>
  </div>
  </div>



</div>
      
        </div>
     </div>
     </div>
     <section>
      <div className='container'>
        <div className="row d-flex">
          <div className="col-lg-3 col-md-6 sm-6">
            <img src={adeyBoutique} alt="" />
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
            <img src={image7} alt="" />
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
            <img src={shoe} alt=""  style={{height:'290px', width:'300px'}}/>
          </div>
          <div className="col-lg-3 col-md-6 sm-6">
            <img src={cap} alt="" />
          </div>
        </div>
      </div>
     </section>
     <section className='mt-5'>
      <h1 className='text-center display-3'>About Our Product</h1>
      <div className="container">
        <div className="row d-flex mx-5 mt-5 ">
          <div className='col-lg-6 col-md-6 justify-item-center display-6 '>
            innovation and convenience combined. Explore cutting-edge technology and sleek design, offering a powerful and user-friendly experience
          </div>
          <div className='col-lg-6 col-md-6'>
            <img src={cap} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex mx-5 mt-5 ">
          <div className='col-lg-6 col-md-6'>
            <img src={adeyBoutique} alt="" />
          </div>
          <div className='col-lg-6 col-md-6 justify-item-center display-6 '>
            innovation and convenience combined. Explore cutting-edge technology and sleek design, offering a powerful and user-friendly experience
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex mx-5 mt-5 ">
          <div className='col-lg-6 col-md-6 justify-item-center display-6 '>
            innovation and convenience combined. Explore cutting-edge technology and sleek design, offering a powerful and user-friendly experience
          </div>
          <div className='col-lg-6 col-md-6'>
            <img src={shoe} alt=""  style={{height:'350px', width:'370px'}}/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex mx-5 mt-5 ">
          <div className='col-lg-6 col-md-6'>
            <img src={image7} alt="" />
          </div>
          <div className='col-lg-6 col-md-6 justify-item-center display-6 '>
            innovation and convenience combined. Explore cutting-edge technology and sleek design, offering a powerful and user-friendly experience
          </div>
        </div>
      </div>
     </section>
     <section>
      <div style={{height:'50px', justifyContent:'center', alignContent:'center'}} className='text-center mt-5 text-light bg-black'>
        All right reserved | Copyright © 2024 ADEY BOUTIQUE
      </div>
     </section>
    </>
  )
}
export default Landing
