"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territory from './pages/Home/Territory'
import Territorycircles from './pages/Home/Territorycircles'
import Softwarecard from './Components/Cards/Softwarecard'
import './pages/Home/software.css'
import Oursoftware from './pages/Home/Oursoftware'
    

const page = () => {
  return (
    <div>
        <Navbar />
        <Division />
        <Home />
        <Homesection />
        <div className="container mb-36">
          <Territorycircles />
        </div>
        <Oursoftware/>
    </div>
  )
}

export default page

