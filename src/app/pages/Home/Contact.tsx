import React, { useState } from 'react';
import Form from './Form';
import { motion } from 'framer-motion';

const Contact = () => {
  const [cLick, setcLick] = useState(false);

  return (
    <div className='flex flex-row justify-center bg-white '>
    <div className='bg-custom-purple w-3/4 text-center rounded-md'>
      <h4 className=' pt-5  text-white'>Get access to exclusive updates</h4>
     
      <input
        type="text"
        placeholder='Enter your email address'
        onClick={() => {
          setcLick(!cLick);
        }}
        className='m-7 px-8 py-5 rounded-md cursor-pointer'
      />

      <div>
        {cLick ? <Form /> : null}
      </div>
    </div>
    </div>
  );
}

export default Contact;
