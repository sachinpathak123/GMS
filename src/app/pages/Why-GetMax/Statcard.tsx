"use client"
import { motion } from 'framer-motion'
import React from 'react'
const Statcard = (props: any) => {
  return (
    <div className='flex items-center justify-center  py-1 mt-5'>
     <motion.div className="bg-white w-[300px] text-custom-purple relative rounded-t-none rounded-b-3xs  box-border max-w-md h-[240px] max-h-md m-12  border-t-[5px] border-solid border-blueviolet hover:bg-blueviolet  hover:text-white duration-200"
    >
      <div className="text-center py-20 space-y-3">
        <motion.h2 className="text-17xl font-bold  ">{props.data}</motion.h2>
        <motion.p className=" font-bold text-[25px]">{props.name}</motion.p>
      </div>
    </motion.div>
     </div>
  )
}

export default Statcard