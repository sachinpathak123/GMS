import React from 'react';

function Header() {
  return (
    <div className="px-6 md:px-12 lg:px-24 xl:px-36 py-6 md:py-12 max-sm:p-1 max-sm:px-1 max-sm:mb-10">
      <div className='bg-metrics font-inter py-6 md:py-12 px-6 md:px-12 rounded-3xl'>
        <p className="text-center font-semibold py-2 md:py-4 text-4xl md:text-6xl">Our Metrics Tells the Story</p>
        <p className="text-center text-base md:text-lg mt-2 md:mt-4 font-thin">Our Metrics component gives you inside scoop on your success and helps you stay on top of your game in style</p>
        <div className='flex flex-wrap justify-center mt-6 md:mt-12 gap-6 md:gap-12'>
          <div className='grid grid-cols-1 md:grid-cols-4 max-sm:grid-cols-1 max-sm:gap-8 gap-10 py-16'>
            <div className='inline-flex'>
              <div className="bg-purple-700 w-1 h-16 max-sm:invisible"/>
              <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>10k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Websites Launched</p>
                <hr className="w-full border-purple-700 border-b mt-2 ml-2 max-w-full md:invisible lg:invisible"/>
              </div>
            </div>
            <div className='inline-flex'>
            <div className="bg-purple-700 w-1 h-16 max-sm:invisible"/>
              <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>931k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Projects created with Anima</p>
                <hr className="w-full border-purple-700 border-b mt-2 ml-2 max-w-full md:invisible lg:invisible"/>
              </div>
            </div>
            <div className='inline-flex'>
            <div className="bg-purple-700 w-1 h-16 max-sm:invisible"/>
              <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>240k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>New users joined Anima</p>
                <hr className="w-full border-purple-700 border-b mt-2 ml-2 max-w-full md:invisible lg:invisible"/>
              </div>
            </div>
            <div className='inline-flex'>
            <div className="bg-purple-700 w-1 h-16 max-sm:invisible"/>
              <div className='flex-col'>
                <h2 className='font-bold font-inter text-3xl ml-2'>12k+</h2>
                <p style={{fontSize:'16px',marginLeft:'10px'}} className='font-inter'>Teams used Anima</p>
                <hr className="w-full border-purple-700 border-b mt-2 ml-2 max-w-full md:invisible lg:invisible"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;