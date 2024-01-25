"use client"
import React from 'react'


const Home = () => {
  return (
    <>
    <div className='overflow-hidden w-screen h-screen flex items-center justify-center text-custom-purple font-sans m-0 p-0 '>
        <div className='z-10 relative left-96'>
        <div className='font-extrabold text-5xl text-center space-x-0 '>
            <span>Building Better Products</span>
           <span> Shouldn't Take Forever</span>
      <div className="text-base font-thin text-center">
      We help companies innovate faster and build better products,<br />using real user data and rapid iterations.
      </div>
      </div>
      <div className='items-center  ml-64 mt-5 '>
      <button className=' px-6 py-2 bg-purple-700 text-white rounded-md  capitalize font-thin flex flex-rowhover:bg-purple-800'>Let's get started!
     
      </button>
     
            
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
        className="absolute top-[621.6px] right-[-50px] w-1/12 h-[250px] object-contain overflow-hidden "
        alt=""
        src="/yellowcircle.png"
      />
      <img
        className="absolute top-[100px] right-[300px] w-[22.6px] h-[50px] object-contain"
        alt=""
        src="/purplecircle.png"
      />
      <img
        className="absolute top-[350.7px] right-[-30px] w-[57.2px] h-[54.5px] object-contain"
        alt=""
        src="/yellowcircle.png"
      />
    </div>

      </div>
      
    
    </>
  )
}

export default Home;
