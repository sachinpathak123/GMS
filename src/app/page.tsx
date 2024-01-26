"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Final from '@/app/pages/Home/Final'
import Territorycircles from './pages/Home/Territorycircles'
import Software from './pages/Home/Oursoftwares/Software'
import Contact from './pages/Home/Contact'

const page = () => {
  return (
    <div>
        <Navbar />
        <Division />
        <Home />
        <Homesection />
          <Territorycircles />
        <Final />
        <Software/>
        <Contact />
        {/* <Oursoftware/> */}
    </div>
  )
}

export default page

