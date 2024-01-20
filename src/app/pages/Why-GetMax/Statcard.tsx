import React from 'react'

const Statcard = (props: any) => {
  return (
    <div className='flex items-center justify-center  py-1 mt-5'>
     <div className="bg-white w-[300px] relative rounded-t-none rounded-b-3xs  box-border max-w-md h-[240px] max-h-md m-12  border-t-[5px] border-solid border-blueviolet">
      <div className="text-center py-20 space-y-3">
        <h2 className="text-17xl font-bold text-custom-purple">{props.data}</h2>
        <p className="text-purple-800 font-bold text-[25px]">{props.name}</p>
      </div>
    </div>
     </div>
  )
}

export default Statcard