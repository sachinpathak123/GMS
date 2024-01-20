import React from 'react'
import LPbutton from './LPbutton'

const LPheading = () => {
  return (
    <div className='mx-auto' style={{ marginLeft: '2.3%', marginBottom:'12%'}}>
      <div className='flex items-center'>
        <h1 className='font-sans text-5xl font-bold text-leam-purple z-20'>
          “Your health comes first.”
        </h1>
      </div>
      <div className='text-sm font-sans font-normal text-leam-purple z-0'  style={{ marginLeft: '5.7%',marginTop:'5%'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quis dolorum sapiente qui a? Veritatis rem nisi voluptatibus doloremque consequatur.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, aut!
      </div>
      <LPbutton />
    </div>
  )
}

export default LPheading