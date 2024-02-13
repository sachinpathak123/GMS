import React from 'react';
import Card from './Card';

function NextGen() {
  return (
    <div className='my-24 p-24'>
      <div className="flex items-center justify-center">
        <div>
          <p className="text-purple-600 font-bold text-5xl max-sm:text-2xl text-center">
            Tech used in Revenue Cycle{' '}
          </p>
          <p className="text-purple-600 font-bold text-5xl max-sm:text-2xl text-center">
            Management (RCM)
          </p>
        </div>
      </div>
      <div><div className="w-10 h-10 rounded-full mr-auto max-sm:invisible" style={{background: 'conic-gradient(from 360deg,orange 50%,white 50%)'}}/>
      </div>
      <div className="bg-orange-500 w-5 h-5 rounded-full ml-auto max-sm:invisible"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-2 max-sm:ml-5 gap-4 mt-8">
        <Card imageSrc="/img1.png" />
        <Card imageSrc="/img2.png" />
        <Card imageSrc="/img3.png" />
        <Card imageSrc="/img4.png" />
        <Card imageSrc="/img5.png" />
        <Card imageSrc="/img6.png" />
        <Card imageSrc="/img7.png" />
        <Card imageSrc="/img8.png" />
      </div>
      <div className="bg-purple-600 w-8 h-8 rounded-full translate-x-32 max-sm:invisible"></div> 
      <div className="w-4 h-4 rotate-180 bg-purple-600 rounded-full ml-auto max-sm:invisible"></div>
    </div>
  )
}

export default NextGen;
