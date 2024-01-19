import React from 'react'
import Homecard from './Cards/Homecard'

const Homesection = () => {
  return (
    <>
    <div className='w-screen h-3/4 bg-berserk text-black'>
        <br />
        <br /><br />
        <h1 className='text-center font-bold text-5xl'>
        Your health requirements are our  <br /> first focus
        </h1>
        <div className='flex items-center justify-between'>
    <Homecard data="80+" name="Organizations" imgsource="/customer.png"/>
    <Homecard data="25+" name="EHR Software" imgsource="/comp.png"/>
    <Homecard data="1" name="Million Claims" imgsource="/claims.png"/>
    <Homecard data="20%" name="Growth Per Month" imgsource="/Increase.png"/>
    </div>
    </div>
    </>
  )
}

export default Homesection
