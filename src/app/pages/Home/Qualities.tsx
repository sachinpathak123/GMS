import React from 'react'

const Qualities = (props: any) => {
  return (
    <div className=' flex flex-row'>
        <img className='mx-5 w-10 h-10'src={props.imgsource}/>
        <div className='flex flex-col'>
            <div className='items-start pb-6'>
                <h3 className='font-bold  text-lg text-center'>{props.head}</h3>
            </div>
            <div className='text-sm'>
                <p>{props.data}</p>
            </div>
        </div>

    </div>
  )
}

export default Qualities