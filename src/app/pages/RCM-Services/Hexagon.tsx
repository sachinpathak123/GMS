import React from 'react'

function overlap ()  {
  return (
    
    <div style={{
      backgroundImage: `url('/grouphexagon1.png')`,
      width:'100vw',
      height:'30vh',
    }} className='p-2'>
      
      <div className='flex flex-col py-16 gap-8 items-center justify-center'>
        
      <div className='z-50'><p className= 'text-white font-medium z-40 text-lg'>Do you want to know why we are better than
         <span className=' text-white font-medium z-40 text-lg'>other medical billing sites? </span>
      </p></div>
      <div className='z-50'>
      <button className= "z-40  bg-slate-100 h-[30px] w-[170px] transition-transform transform hover:scale-110 text-purple-700 font-bold  rounded-md">
       Why GetMax
  </button>
  </div>
  </div>
    </div>
    
    
  )};
export default overlap
