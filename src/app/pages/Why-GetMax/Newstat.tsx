import React from 'react'
import Statcard from './Statcard'

const Newstat = () => {
  return (
    <div className='w-screen  text-black bg-purple-300 h-[1200px]'>
    <br />
    <br />
    <div className=" flex flex-col items-center justify-end text-4xl text-black font-red-hat-display space-y-[-px]">
      <b className="w-[293px] text-[25px] mb-[-50px]">
        WHY CHOOSE US
      </b>
      <div className="w-[377.4px] h-[112.5px] flex flex-col items-center justify-center py-[.25px]  box-border gap-[21px] mt-[-5px] text-[40px] font-source-sans-pro">
       <div className="w-[282px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#632ed3,_rgba(66,_133,_244,_0))] h-2.5" />
        <b className="w-[377.3px] relative tracking-[0.04em] mb-[-80px]">
          <span>OUR</span>
          <span className="text-blueviolet"> STATISTICS</span>
        </b>
      </div>
    
   <div className='flex flex-col space-y-[-60px]'>
       <div className='flex items-center justify-between'>
              <Statcard data="95%" name="Client Retention"/>
              <Statcard data="48M+" name="Charts loaded Anually" />
              <Statcard data="3100+" name="Coders"/>
        </div>
        <div className='flex items-center justify-between'>
              <Statcard data="3100+" name="Coders"/>
              <Statcard data="3100+" name="Coders"/>
              <Statcard data="3100+" name="Coders"/>
      </div>
   </div>
</div>
</div>
  )
}

export default Newstat