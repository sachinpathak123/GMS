import React, { useState } from 'react'
import Form from './Form';
import { motion } from 'framer-motion';
const Contact = () => {
    const[cLick,setcLick]=useState(false);
  return (
    <div className='bg-custom-purple text-center'>

      <input type="text" placeholder='Enter your email address' onClick={() => {
        setcLick(!cLick) 
      }} className='m-7 px-8 py-2 rounded-full cursor-pointer' />
      <div >
      {cLick ? <Form />: null}
      </div>
      </div>
  )
}

export default Contact
