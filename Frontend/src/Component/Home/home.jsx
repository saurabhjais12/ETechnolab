import React from 'react'
import Navbar from '../Navbar'
import Content from '../Content'
import Ourvalues from '../Pages/Ourvalues'
import Industriesweserve from '../Pages/Industriesweserve'
import Contactus from '../Pages/Contactus'
import OurServices from '../Pages/OurServices'
import Technology from '../Pages/Technology'

const home = () => {
  return (
    <>
    <Navbar/>
    <Content/>
    <Industriesweserve/>
    <Ourvalues/>
    <Technology/>
    <OurServices/>
    <Contactus/>
    </>
  )
}

export default home