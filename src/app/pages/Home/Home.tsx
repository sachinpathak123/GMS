"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='overflow-hidden max-w-fit h-screen flex items-center justify-center text-custom-purple font-sans '>
        <div className='z-10 relative flex-col left-96 items-center'>
        <div className='font-extrabold text-5xl text-center space-x-0 '>
            <span>Building Better Products</span>
           <span> Shouldn't Take Forever</span>
      <div className="text-base font-thin text-center">
      We help companies innovate faster and build better products,<br />using real user data and rapid iterations.
      </div>
      </div>
      <div className='items-center  ml-64 mt-5 '>
      <motion.button className=' px-6 py-2 bg-purple-700 text-white rounded-md  capitalize font-thin flex flex-row hover:bg-purple-800' whileHover={{
        scale:1.1
      }}
      transition={{type:'spring',stiffness:'300'}}>Let's get started!
     
      </motion.button>
     
            
      </div>
      </div>
      
      <div className="w-screen h-[721px] z-0 overflow-hidden">
      <img
        className="absolute top-[200px] left-[-40px] w-[94.7px] h-[90.2px] object-contain "
        alt=""
        src="/yellowcircle.png"
      />
      <img
        className="absolute top-[450px] left-[-22.6px] w-[46.1px] h-[43.8px] object-contain"
        alt=""
        src="/purplecircle.png"
      />
        <img
        className="absolute top-[550px] left-[400px] w-[46px] h-[46px] object-contain "
        alt=""
        src="/yellowcircle.png"
      />
      <img
        className=" absolute top-[250px] right-[-17px]  h-[100px] object-contain overflow-hidden "
        alt=""
        src="/halfyellowcircle.png"
      />
      <img
        className="absolute top-[100px] right-[300px] w-[22.6px] h-[50px] object-contain"
        alt=""
        src="/purplecircle.png"
      />
      <img
        className="z-0 absolute right-[-17px] top-[650px]"
        alt=""
        src="/halfyellowcircle.png"
      />
    </div>

      </div>
      
    
    </>
  )
}

export default Home;
