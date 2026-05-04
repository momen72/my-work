import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar/>

    <Outlet/> 
    {/* دة عشان يغير شكله على المحتوى سواء كان صفحة الهووم او اللوجن  */}
      <Footer/>
    </div>
  )
}
