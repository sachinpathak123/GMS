"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territory from './pages/Home/Territory'
import Territorycircles from './pages/Home/Territorycircles'
import Software from './pages/Home/Oursoftwares/Software'

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
        <Software/>
    </div>
  )
}

export default page

