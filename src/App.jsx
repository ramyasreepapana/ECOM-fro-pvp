import { useState } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products'
function App() {

   const [query, setquery] = useState('')
  return (
    <>
      <Header  setquery={setquery}   />
     <Products  query={query}  />  
     
    </>
  )
}

export default App
