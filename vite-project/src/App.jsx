import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import About from './Components/About'
import Categories from './Components/Categories'
import Contact from './Components/Contact'


function App() {
  return (
    <>
     <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home name="Sneha" from="Mannargudi"/>}/>
        <Route path='/about' element={<About degree="B.SC" special="Computer Science"/>}/>
        <Route path='/contact' element={<Categories phoneno="9342144316"/>}/>
        <Route path='/cirtificate' element={<Contact cirt="Full stack development"/>}/>
      </Routes>
    </BrowserRouter>
    <Home/>
      
    </>
  )
}

export default App
