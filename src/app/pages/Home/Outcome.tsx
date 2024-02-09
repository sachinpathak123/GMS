import React from 'react'
import Qualities from './Qualities'


const Outcome = () => {
  return (
    <div className='py-20'>
        <h2 className='text-center  justify-items-center text-2xl md:text-5xl font-bold'>We Provide Highest </h2>
        <br/>
        <h2 className='text-center text-purple-700 text-xl md:text-[35px] font-semibold'>Quality Outcomes. </h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-11 px-10 md:px-24 py-20  justify-items-center   '>
           <Qualities imgsource= "slider.png" data="we help to transform performance of revenue cycle to deliver improved margins,increased cash flow" head="Help 100+  healthcare organisation"/>
           <Qualities imgsource= "patient.png" data="Our well trained RCM team and appropriate technology may aid in making billing and coding process seamless and efficient.Patient will be less worried." head="Improves Patient Experience"/>
           <Qualities imgsource= "reduceclaim.png" data="Implementing RCM process helps minimize errors in claims submission,leading to a decrease in claim denials and subsequent rework. " head="Reduces Claim Denials"/>
           <Qualities imgsource= "coupon.png" data="we cut cost by 40% by outsourcing coding denials management and avoid overspending and preventing costly malfunctions." head="40% Cost Cuttings"/>
           <Qualities imgsource= "efficiency.png" data="Automation and optimization of administrative tasks results in streamlined processes,reducing manual errorsand improving overall efficiency." head="Enhanced Efficiency"/>
           <Qualities imgsource= "chart-bar-33.png" data="We enhance your financial Performance through our well designed and implemented RCM System" head="3X ROI"/>
       </div>
    </div>   
  )
}

export default Outcome