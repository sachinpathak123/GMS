"use client"
import { motion } from 'framer-motion'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='overflow-hidden max-w-fit bg-white h-screen flex items-center justify-center text-custom-purple font-sans pt-44'>
      <img className=' h-full w-full bg-white object-scale-down absolute top-0' src={'/Home_bg.png'} alt='Balls' />
        <div className='z-10 w-screen flex-col text-center items-center justify-items-center  '>
         <div className='font-semibold text-2xl md:text-5xl lg:text-7xl text-center w-screen text-transparent bg-clip-text bg-gradient-to-r from-[#8C17E8] to-[#3C058C] tracking-normal leading-[60px] '>
            <span>Dive into the heart of healthcare</span>
            <br/>
            <span>prosperity with GetMax</span>
           <div className=" text-sm md:text-base font-semibold text-center py-8 text-[#1E1E1E]">
           where RCM mastery meets the pulse of financial wellness – rewriting the <br />narrative of success for every healthcare institution
           </div>
         </div>
         <div className='items-center justify-items-center text-center'>
           <motion.button className='items-center justify-items-center text-center px-6 py-2 bg-purple-700 text-white rounded-md  capitalize font-thin  hover:bg-purple-800' whileHover={{
            scale:1.1
           }}
           transition={{type:'spring',stiffness:'300'}}>Let's get started!
         
           </motion.button>
         </div>
       </div>
      
       {/* <div className="w-screen h-[721px] z-0 overflow-hidden">
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
          className="z-0 absolute right-[-17px] top-[650px] w-[80px]"
          alt=""
          src="/halfyellowcircle.png"
      />
       </div> */}

      </div>
    </>
  )
}

export default Home;
