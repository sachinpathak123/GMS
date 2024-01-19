"use client"
import React from 'react'

const Territory = (val:any) => {
  return (
    <>
    <div className='bg-white w-screen h-3/4 leading-4'>
     <div className="bg-custom-purple p-0 rounded-full w-64 h-64 hover:shadow-3xl duration-500 flex flex-col items-center justify-between">
        <br />
        <img src={val.imaga} alt="brain image" className='w-12 h-12 my-auto' />
      <h1 className="text-xl font-semibold text-white text-center py-4">{val.topic}</h1>
      <p className="text-white mb-4 font-normal text-center text-2xs px-4">
        {val.description}
      </p>
      <p className="text-white mb-10 text-center text-2xs">
         <a href="/neurology-detail" className="text-white hover:scale-105 hover:text-black transition-colors duration-300">READ MORE</a>
      </p>
    </div>
    <br />
    <br />
    </div>
    </>
  )
}

export default Territory
