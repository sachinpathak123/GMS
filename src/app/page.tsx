"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territorycircles from './pages/Home/Territorycircles'
import Software from './pages/Home/Oursoftwares/Software'
import Contact from './pages/Home/Contact'
import Slider from './pages/Home/Slider'
const page = () => {
  return (
    <div>
        <Navbar />
        <Division />
        <Home />
        <Homesection />
          <Territorycircles />
        <Software/>
        <Slider />
        <Contact />

        {/* <Oursoftware/> */}
    </div>
  )
}

export default page

