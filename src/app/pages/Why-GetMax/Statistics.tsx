import React from 'react'

const Statistics = () => {
  return (
    <div className="w-screen bg-gmd-purple h-screen overflow-hidden text-center text-17xl text-blueviolet font-sans ">
    <div className=" w-96 h-48 flex flex-col items-center text-4xl text-black font-red-hat-display">
      <b className="w-64 relative tracking-widest m-0 leading-relaxed capitalize h-12 text-center">
        WHY CHOOSE US
      </b>
      <div className="w-96 h-48 py-[0.23239898681640625px] pr-0 pl-[0.04388456046581268px] box-border gap-8 mt-[-5px] text-29xl font-source-sans-pro">
        <div className="w-96 [background:radial-gradient(50%_50%_at_50%_50%,_#632ed3,_rgba(66,_133,_244,_0))] h-2.5 pr-2" />
        <b className="w-[377.3px] relative tracking-[0.04em] m-5 capitalize inline-block h-[71.2px] shrink-0 [transform:_rotate(0.04deg)]">
          <span>OUR</span>
          <span className="text-blueviolet"> STATISTICS</span>
        </b>
      </div>
    </div>
    <br />
    <br />
    <div className="flex items-center justify-start gap-[73px]">
      <div className="w-[1208px] h-64 flex flex-row items-center justify-start gap-[97px]">
        <div className="w-[338px] relative rounded-t-none rounded-b-3xs  box-border h-64 ">
          <div className=" top-[0px] left-[0px] rounded-t-none rounded-b-3xs bg-white box-border w-[338px] h-64 border-t-[5px] border-solid border-blueviolet" />
          <div className=" top-[87px] left-[67px] w-[204.1px] h-[97.4px] overflow-hidden">
            <b className=" top-[0.3px] left-[50px] tracking-[0.03em] leading-[40px] inline-block w-[138.8px] h-[42.8px] [transform:_rotate(-0.11deg)] [transform-origin:0_0]">
              95%
            </b>
            <b className="absolute w-[99.95%] top-[71.25%] left-[0%] text-5xl tracking-[0.03em] leading-[28px] inline-block text-center [transform:_rotate(-0.11deg)] [transform-origin:0_0]">{`Client Retention `}</b>
          </div> 
  </div> 
      </div>
    </div>
  </div>
  )
}

export default Statistics