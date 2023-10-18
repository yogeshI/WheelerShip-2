import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contactpage from './Pages/Contact/Contactpage'
import Footer from './components/Footer/Footer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dispalyproducts from './Pages/Products/Dispalyproducts'
import Createproducts from './Pages/Products/Createproducts'
import Updateproduct from './Pages/Products/Updateproduct'



const App = () => {
  return (
    <div>
      
    <BrowserRouter>

    <Navbar />

    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact-us' element={<Contactpage />} />
    <Route path='/product' element={<Dispalyproducts />} />
    <Route path='/Create' element={<Createproducts />} />
    <Route path='/Update/:id' element={<Updateproduct />} />
   



    </Routes>
    </BrowserRouter>

    <Footer />
    </div>
  )
}

export default App