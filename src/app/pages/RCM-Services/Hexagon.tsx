import React from 'react'

function overlap ()  {
  return (
    
    <div style={{
      backgroundImage: `url('/grouphexagon1.png')`,
      width: '100vw',
      height: '30vh',
    }} className='p-2'>
      <div className='flex flex-col py-16 gap-8 items-center justify-center'>
        <div className='text-center'>
          <p className='text-white font-medium text-lg'>
            Do you want to know why we are better than other medical billing sites?
          </p>
        </div>
        <div className="flex justify-center ">
          <button className="bg-slate-100 h-[30px] w-[170px] md:w-[200px] sm:w-[150px] text-purple-700 font-bold rounded-md hover:scale-110">
            Why GetMax
          </button>
        </div>
      </div>
    </div>    
  )};
export default overlap
