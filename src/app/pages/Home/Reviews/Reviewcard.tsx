import React from 'react'

const Reviewcard = (props : any) => {
  return (
    <div className='max-w-[300px] min-w-[200px] flex flex-col items-center justify-items-center text-center border rounded-[10px] border-purple-400 border-solid  border-opacity-90 shadow-2xl bg-white' >
        <img className='w-[15%] h-1/2 mt-9' src={props.imgsource}
        />
        <h3 className='text-lg font-source-sans-pro'>{props.name}</h3>
        <h4 className='text-xs capitalize font-thin mt-[-3px]'>{props.who}</h4>
        <h6 className='w-full px-7 text-2xs mt-5'>{props.data}</h6>
        <img className='w-full h-[17%] mt-9 py-4' src={props.star}
        />
        
    </div>
  )
}

export default Reviewcard