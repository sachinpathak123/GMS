import React from 'react';
import Card from './Card'

function NextGen() {
  return (
    <div className='mt-96 p-24'>
      
      <div className="flex items-center justify-center">
        <div className="">
          <p className="text-purple-600 font-bold text-5xl text-center">
            Tech used in Revenue Cycle{' '}
          </p>
          <p className="text-purple-600 font-bold text-5xl text-center">
            Management (RCM)
          </p>
        </div>
      </div>
      <div>
        <img src="/yellow.jpeg" className="w-8 h-10" alt="Logo" />
      </div>
      <div className="bg-orange-500 w-5 h-5 rounded-full ml-auto"></div>
      <div className="flex items-center justify-center">
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        {/* <div className="bg-purple-600 w-8 h-8 rounded-full translate-x-32"></div> */}
        {/* <div className="w-4 h-4 rotate-180 bg-purple-600 rounded-full"></div> */}
      </div>
      <div className="flex items-center justify-center">
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
        <div>
          <Card imageSrc="/img1.jpeg" />
        </div>
      </div>
      {/* <div>
        <img
          src="/yellow.jpeg"
          className="w-10 h-12 ml-auto rotate-180"
          alt="Logo"
        />
    </div> */}
    </div>
  )
}

export default NextGen;
