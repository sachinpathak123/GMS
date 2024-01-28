"use client"
import { motion } from 'framer-motion'
import React from 'react'
const Statcard = (props: any) => {
  return (
    <div className='flex items-center justify-items-center py-1 mt-5'>
     <motion.div className="bg-white w-[270px] text-custom-purple relative rounded-t-none rounded-b-3xs  box-border max-w-md h-[200px] max-h-md m-12  border-t-[5px] border-solid border-blueviolet hover:bg-blueviolet  hover:text-white duration-200"
    >
      <div className="text-center space-y-3 mt-11 ">
        <motion.h2 className="text-[30px] font-bold   ">{props.data}</motion.h2>
        <motion.p className=" font-bold text-[20px]">{props.name}</motion.p>
      </div>
    </motion.div>
     </div>
  )
}

export default Statcard