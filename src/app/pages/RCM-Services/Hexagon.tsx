import React from 'react'

function overlap ()  {
  return (
    
    <div className="flex">
      <img src="purpleback.png" alt="Image 1" className="w-screen h-[270px] z-10" />
      <img src="hexagon.png" alt="Image 2" className="w-[370px] h-[330px] z-20 -mt-[23px] -ml-[1350px] " />
      <p className= ' text-white mt-16 font-medium z-30 text-lg  ml-36'>Do you want to know why we are better than
         <p className='  ml-20 text-white font-medium text-lg'>other medical billing sites? </p>
      </p>
      <button className= "z-40  bg-slate-100 h-[30px] w-[170px] ml-[-270px] mt-36 transition-transform transform hover:scale-110 text-purple-700 font-bold  rounded-md">
       Why GetMax
  </button>
    </div>
    
    
  )};
export default overlap
