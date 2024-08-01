import React, { useState, useEffect }from 'react'
import Landing from './Landing';
import { useNavigate } from 'react-router-dom';
import video from '../assets/adey2.mp4'
const Landingloader = () => {
    const [loadingPage, setLoadingPage] = useState(true);
    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoadingPage(false);
        navigate('/landingPage');
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [navigate]);
  
    return (
      <div className='relative'>
        {loadingPage ? (
          <div style={{backgroundColor:'rgb(246,244,237)'}} className=' h-screen w-full absolute'>
           <video   autoPlay muted  style={{marginLeft:'30%', marginTop:'5%'}}>
  <source src={video} type="video/mp4" />
</video>
          </div>
        ) : (
          <div>
            <Landing/>
          </div>
        )}
      </div>
    );
}

export default Landingloader
