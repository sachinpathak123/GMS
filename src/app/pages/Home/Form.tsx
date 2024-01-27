"use client"
import React, { useState } from 'react'
import './Form.css'
import LP from '../Why-GetMax/LP/LP';
import { motion } from 'framer-motion';
const Form = () => {
  const[close,setclose]=useState(false);
  return (
    <motion.div className='bg-custom-purple flex items-center justify-center p-10'
    initial={{x:'-100vw'}}
    animate={{x:0}}
    transition={{delay:0.1,type:'spring',stiffness:120}}
    >
    <div className="login-box">
    <h2>Reach Out</h2>
    <form>
      <div className="user-box">
        <input type="text" required />
        <label>Email</label>
      </div>
      <div className="user-box">
        <input type="email" required />
        <label>Message</label>
      </div>
      <a href="#" onClick={() =>{
          setclose(!close);
          close ? <LP /> : null
      }}>
        <span />
        <span />
        <span />
        <span />
        Get a Call
      </a>
    </form>
  </div>
  </motion.div>
  )
}

export default Form
