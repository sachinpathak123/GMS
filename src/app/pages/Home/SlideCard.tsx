import React from 'react';

function SlideCard(props:any){
    return(
      <>
      <div className='px-14 py-10 flex items-center justify-center'>
      <div className='bg-white w-[22vw] h-[46vh]'>
        <div className='flex flex-col gap-2 items-center'>
       <img src={props.headimg} alt="an image" className='p-3' />
       <h1 className='font-inter text-2xl font-semibold'>{props.heading}</h1>
       <pre className='font-inter text-xs font-thin text-wrap px-10 py-3 text-center'>{props.content}</pre>
       <button className='text-green-500 font-semibold py-2'>Learn More</button>
       </div>
       </div>
       </div>
      </>
    );
}
export default SlideCard;