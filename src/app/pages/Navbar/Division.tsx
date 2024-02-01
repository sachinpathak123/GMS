"use client"
import { motion } from 'framer-motion';
import React from 'react'
const Division = () => {
  return (
    <motion.div className='fixed'
    initial={{y:-300}}
    animate={{y:0}}
    transition={{delay:0.2,type:'spring',stiffness:120}}>
       <div className="w-screen h-px bg-black absolute top-20" />
    </motion.div>
  )
}

export default Division;
