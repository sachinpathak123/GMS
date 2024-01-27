import React from 'react';
import Homecard from './Cards/Homecard';
import { motion } from 'framer-motion';
const Homesection = () => {
  return (
    <>
      <motion.div className='relative grid grid-rows-4 h-screen w-screen'
      initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:1,duration:1.25}}>
        {/* lp-purple background */}
        <div className='row-span-2 w-full h-full bg-lp-purple text-custom-purple relative z-10'>
          <h1 className='text-center font-bold text-5xl py-5'>
            Your health requirements are our <br /> first focus
          </h1>
          <div className='grid grid-cols-4 lg:px-36 m-5'>
            <Homecard data="80+" name="Organizations" imgsource="/customer.png" />
            <Homecard data="25+" name="EHR Software" imgsource="/comp.png" />
            <Homecard data="1" name="Million Claims" imgsource="/claims.png" />
            <Homecard data="20%" name="Growth Per Month" imgsource="/Increase.png" />
          </div>
        </div>
        
        {/* White background */}
        <div className='bg-white absolute top-0 left-0 right-0 bottom-0'></div>
      </motion.div>
    </>
  );
};

export default Homesection;
