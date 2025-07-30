import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import { Routes, Route } from 'react-router'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
        <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/placeOrder' element={<PlaceOrder></PlaceOrder>}></Route>
      </Routes>
    </div>
    
    <Footer></Footer>
    </>

  )
}

export default App