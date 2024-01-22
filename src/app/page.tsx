"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Territory from './pages/Home/Territory'
import Territorycircles from './pages/Home/Territorycircles'
<<<<<<< HEAD
import Software from './pages/Home/Oursoftwares/Software'
=======
import Softwarecard from './Components/Cards/Softwarecard'
import './pages/Home/software.css'
import Oursoftware from './pages/Home/Oursoftware'
import Contact from './pages/Home/Contact'
    
>>>>>>> 3a7907ab666cd9dd4188cce712a605db2f8d24b2

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
<<<<<<< HEAD
        <Software/>
=======
        <Oursoftware/>
        <Contact />
>>>>>>> 3a7907ab666cd9dd4188cce712a605db2f8d24b2
    </div>
  )
}

export default page

