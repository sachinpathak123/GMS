"use client"
import React from 'react'
import { motion } from 'framer-motion'
const LP = () => {
  return (
    <>
  <div className="grid grid-cols-2 gap-2">
    <div className=' px-8 py-6 m-6 flex items-center justify-center'>
        <div className='flex flex-col gap-4'>
            <div className='text-5xl font-sans font-light'>
            GETMAX SOLUTIONS <span className='text-custom-purple font-semibold'>WELCOMES</span> YOU
            </div>
            <h2 className='text-lg font-xxlight text-black px-3 flex'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sed dicta ex molestiae, officiis corrupti dolorum dolore ipsam tempore reprehenderit?
            </h2>
            <motion.div className='bg-custom-purple px-6 py-4 ml-5 w-1/3 text-center rounded-md  hover:bg-light-pUrple duration-150 cursor-pointer flex'
            whileHover={{
              scale:1.1,
            }}
            transition={{type:'spring',stiffness:'500'}}
            >
              <p className='text-xs text-white font-sans'>
                <span className='px-4 py-4'>
                Lets get started!
                </span>
              </p>
            </motion.div>
        </div>
    </div>
    <div className='p-16 m-8 flex items-center justify-center'>
       <img src="/LPimg.png" alt="an image" className='w-full h-full'/>
    </div>
    </div>
    </>
  )
}

export default LP
