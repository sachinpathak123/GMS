import React from 'react';
function Hexagon() {
  return (
    <div>
      <img className='absolute inset-0 w-screen h-[230px] mt-14 object-cover' src='./purpleback.png' alt='no background' />
      <img className='mix-blend-lighten absolute inset-0 mt-[2px]  w-80 h-80 object-cover' src='./hexagon.png' alt='no hexagon' />
     
      <p className= 'absolute mt-20 ml-[490px] text-white font-medium text-lg'>Do you want to know why we are better than
         <p className='relative  ml-20 text-white font-medium text-lg'>other medical billing sites? </p>
      </p>
      <button className= "absolute ml-[590px] bg-slate-100 mt-[160px] hover:bg-purple-400  text-purple-700 font-bold py-2 px-9  rounded-md">
       Why GetMax
  </button>
    </div>
  );
}

export default Hexagon;


   