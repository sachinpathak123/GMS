import React from 'react'
import LPheading from './LPheading'

const LP = () => {
  return (
    <>
    <div className='bg-gm-purple h-screen w-screen flex items-end justify-end fixed'>
      <LPheading />
        <img src="/fam.png" alt="familyimage" className='w-64 h-64 relative left-32 bottom-48 z-10' />
        <img src="/sphere.png" alt="an image" className='w-96 h-96 relative mb-8 mr-4' />
        
    </div>
      
    </>
  )
}

export default LP
