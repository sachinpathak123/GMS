import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='bg-white flex items-center justify-center'>
    <div className="login-box">
    <h2>Login</h2>
    <form>
      <div className="user-box">
        <input type="text" required />
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password" required />
        <label>Password</label>
      </div>
      <a href="#">
        <span />
        <span />
        <span />
        <span />
        Submit
      </a>
    </form>
  </div>
  </div>
  )
}

export default Form
