import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Footer'
import Sidebar from '../Component/Sidebar'
import Demo from './Demo'
import Sidebarnew from '../Component/Sidebarnew'
import Useeffect1 from './Useeffect1'
import Sample from './Sample'
import Fulldesc from './Fulldesc'

const Layout = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Demo></Demo>
      <Sidebarnew/>
      <Outlet />
     
      {/* <Useeffect1/> */}
      {/* <Footer /> */}
    </>
  )
}

export default Layout