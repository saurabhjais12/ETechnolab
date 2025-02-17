import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home/home'
import './index.css'
import Contactus from './Component/Pages/Contactus'
import Aboutus from './Component/Pages/Aboutus'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
    </>
  )
}

export default App
