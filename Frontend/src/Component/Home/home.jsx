import React from 'react'
import Navbar from '../Navbar'
import Content from '../Content'
import Footer from '../footer'
import Ourvalues from '../Pages/Ourvalues'
import Industriesweserve from '../Pages/Industriesweserve'
import Contactus from '../Pages/Contactus'
import OurServices from '../Pages/OurServices'

const home = () => {
  return (
    <>
    <Navbar/>
    <Content/>
    <Industriesweserve/>
    <Ourvalues/>
    <OurServices/>
    <Contactus/>
    <Footer/>
    </>
  )
}

export default home