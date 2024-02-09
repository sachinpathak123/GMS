import React from 'react';
import Homecard from './Cards/Homecard';
import { motion } from 'framer-motion';

const Homesection = () => {
  return (
    <div className='flex items-center justify-center text-left'>
      <div className='w-[70vw] bg-leam-purp rounded-md '>
        <div className='grid grid-cols-6 gap-8 text-gm-purple'>
          <div className='col-span-6 py-10 md:py-24 px-5 md:px-16'>
            <h2 className='font-inter font-[50] text-base md:text-3xl w-full'>Unlock the Potential of Your Revenue Cycle with GetMax</h2>
            <span className='font-inter font-medium text-base md:text-3xl text-custom-purple w-full'>Improve your healthcare business by letting
             us simplify your revenue cycle, freeing up clinicians to focus on great patient care. With over  
             <span className='font-semibold'>
              &nbsp; 40% cost savings&nbsp;
             </span>
             and a notable
             <span className='font-semibold'>
             &nbsp;20% boost in collections
             </span>
               , partner with us for leading results using our expertise and advanced technology.
             </span>
          </div>
          {/* <div className='col-span-2 py-24 px-4'>
            <button className='bg-custom-purple px-12 py-4 m-5 rounded-md text-white'>get started</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homesection;
