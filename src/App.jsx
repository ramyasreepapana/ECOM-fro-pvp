import {Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products'
import Footer from '../Footer'
import Home from './Home'
import Pricing from './Pricing'
import About from './About'
function App() {

   const [query, setquery] = useState('')
  return (
    <>
      <Header  setquery={setquery}   />

     <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/about'  element={<About/>} />
    <Route path='/products'  element={<Products  query={query} />} />
    <Route path='/pricing'  element={<Pricing/>} />
     </Routes>
     
     <Footer/>
     
    </>
  )
}

export default App
