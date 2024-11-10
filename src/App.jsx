import { useState } from 'react'
import './App.css'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import HomeHero from './components/homeHero'
import AboutUs from './components/aboutUs'
import Products from './components/products'
import Branches from './components/branches'
import NotFound from './components/notFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='*'  element={<NotFound/>} />
        <Route path="/home" element={<HomeHero/>} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Branches" element={<Branches/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
