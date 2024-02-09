"use client"
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import Division from './pages/Navbar/Division'
import Homesection from './Components/Homesection'
import Final from './pages/Home/Final'
import Territorycircles from './pages/Home/Territorycircles'
import Software from './pages/Home/Oursoftwares/Software'
import Contact from './pages/Home/Contact'
import Slider from './pages/Home/Slider'
import Outcome from './pages/Home/Outcome'
import Graph from './pages/Home/Graph'
import { motion, useScroll } from 'framer-motion'
import Independent from './pages/Home/Independent'
import Reviews from './pages/Home/Reviews/Reviews'

const page = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:0.2}}
   >
        <Home />
        <Homesection />
        <Outcome />
        <Territorycircles />
        <Independent/>
        <Final />
          <Graph />
        <Software/>
        <Reviews />
        <Slider />
          <br />
          <br />
          <br />
          <br />
        {/* <Oursoftware/> */}
    </motion.div>
  )
}

export default page

