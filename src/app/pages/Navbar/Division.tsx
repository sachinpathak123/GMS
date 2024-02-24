"use client"
import { motion } from 'framer-motion';
import React from 'react'
const Division = () => {
  return (
    <motion.div className='fixed'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.4}}>
       <div className="w-screen h-px bg-black absolute top-16" />
    </motion.div>
  )
}

export default Division;
