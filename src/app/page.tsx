"use client"
import React from 'react'
import Home from './Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territory from './Home/Territory'
import Territorycircles from './Home/Territorycircles'
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

