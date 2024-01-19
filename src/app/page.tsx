"use client"
import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territory from './pages/Territory'
import Territorycircles from './pages/Territorycircles'
const page = () => {
  return (
    <div>
      <Navbar />
      <Division />
      <Home />
      <Homesection />
      <div className="container">
      <Territorycircles />
</div>

    </div>
  )
}

export default page

