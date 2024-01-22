import React from 'react'
import './Form.css'

const Form = () => {
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
      <a href="#">
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
