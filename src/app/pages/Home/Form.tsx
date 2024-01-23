import React, { useState } from 'react'
import './Form.css'
import LP from '../Why-GetMax/LP/LP';

const Form = () => {
  const[close,setclose]=useState(false);
  return (
    <div className='bg-custom-purple flex items-center justify-center p-10'>
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
  </div>
  )
}

export default Form
