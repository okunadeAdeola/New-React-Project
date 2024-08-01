import { Route, Routes } from 'react-router-dom'
import './App.css'
import Shoppingdetail from './component/Shoppingdetail'
import Usercart from './component/Usercart'
import Datadetails from './component/Datadetails'
import Loader from './component/Loader'
import CustomModal from './component/CustomModal'
import Landing from './component/Landing'
import SignUp from './component/SignUp'
import Signin from './component/Signin'
import Landingloader from './component/Landingloader'



function App() {


  return (
    <>

<div className='font-[Mirza]'>


      <Routes>
        <Route path='/loader' element={<Loader />} />
        <Route path='/' element={<Landingloader />} />
        <Route path='/modal' element={<CustomModal />} />
        <Route path='/fashion' element={<Datadetails />} />
        <Route path='/details' element={<Shoppingdetail />} />
        <Route path='/cart' element={<Usercart />} />
        <Route path='/landingPage' element={<Landing />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Signin/>}></Route>
      </Routes>


</div>



    </>
  )
}

export default App
