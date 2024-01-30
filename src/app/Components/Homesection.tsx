import React from 'react';
import Homecard from './Cards/Homecard';
import { motion } from 'framer-motion';

const Homesection = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-[80vw] h-[40vh] bg-leam-purp rounded-md '>
        <div className='grid grid-cols-6 gap-8 text-gm-purple'>
          <div className='col-span-4 py-24 px-16'>
            <h2 className='font-inter font-[50] text-3xl'>Ready to get started?</h2>
            <span className='font-inter font-medium text-3xl text-custom-purple'>Talk to us today</span>
          </div>
          <div className='col-span-2 py-24 px-4'>
            <button className='bg-custom-purple px-12 py-4 m-5 rounded-md text-white'>get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesection;
