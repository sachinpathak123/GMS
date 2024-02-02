import React from 'react'

const Pinkcard = (props : any) => {
    return (
      <div className=" w-[140px] h-[215px] flex flex-row  justify-end text-left text-[14.6px] text-white font-source-sans-pro ">
        <div className="w-[140px] h-[215px] flex flex-col items-center justify-start">
          <img
            className="w-[140px] relative rounded-3xl h-[215px] object-cover px-1"
            alt=""
            src={props.imgsource}
          />
          <div className="w-[132px] relative rounded-3xl bg-[#B9A7FF] opacity-60 h-[215px] mt-[-215px]" />
        </div>
        <div className="relative w-[120px] rounded-3xl h-[215px]  flex flex-col items-center justify-end py-[1.2586517333984375px] px-2 box-border  ml-[-120px]">
          <div className="text-left font-thin w-[110px] leading-[17.49px] inline-block h-[120px] shrink-0 mr-px text-xs text-opacity-50"> 
            {props.data}
          </div>
          {/* <div className='relative object-top inline-block rounded-lg p-2'>
            <button className='ml-14 justify-items-center  bg-black hover:bg-purple-900 w-[35px] h-[25px] rounded-lg'><img className='mx-3' src="/arrow.svg" alt="" /></button>
          </div> */}
        </div>
      </div>
    );
  };
  
  export default Pinkcard;

  
  