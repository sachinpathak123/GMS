import React from 'react'
import Statcard from './Statcard'

const Newstat = () => {
  return (
    <div className='w-screen  text-black bg-[#B9A7FF] h-[900px] pb-8'>
    <br />
    <br />
    <div className=" flex flex-col items-center justify-end text-4xl text-black font-red-hat-display space-y-[5px]">
      <b className="w-[220px] text-[25px] mb-[-50px]">
        WHY CHOOSE US
      </b>
      <div className="w-[377.4px] h-[112.5px] flex flex-col items-center justify-center py-[.25px]  box-border gap-[21px] mt-[-5px] text-[40px] font-source-sans-pro">
       <div className="w-[290px] relative [background:radial-gradient(50%_50%_at_50%_50%,_#632ed3,_rgba(66,_133,_244,_0))] h-2.5" />
        <b className="w-[309
          px]  relative tracking-[0.04em] mb-[-80px]">
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