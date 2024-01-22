import React, { useState } from 'react'
import Form from './Form'

const Contact = () => {
  const [cLick, setcLick] = useState(false)

  const handleClick = () => {
    setcLick(prevState => !prevState)
  }

  return (
    <div className='bg-custom-purple text-center'>
      <input
        type='text'
        placeholder='Enter your email address'
        onClick={() => setTimeout(handleClick, 300)}
        className='m-7 px-8 py-2 rounded-full cursor-pointer' 
      />
      {cLick ? <Form /> : true}
    </div>
  )
}

export default Contact