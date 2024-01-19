"use client"
import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
const page = () => {
  return (
    <div>
      <Navbar />
      <Division />
      <Home />
      <Homesection />
    </div>
  )
}

export default page

