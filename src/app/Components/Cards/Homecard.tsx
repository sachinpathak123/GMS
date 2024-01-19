import React from 'react'

const Homecard = (props:any) => {
  return (
    <>
     <div className='flex items-center justify-center  py-5 mt-5'>
     <div className="bg-white shadow-lg rounded-lg p-12 w-52 max-w-md h-64 max-h-md m-12">
      <div className="text-center py-2">
      <img className="w-16 h-16 mx-auto mb-6" src={props.imgsource}alt="Your Logo" />
        <h2 className="text-3xl font-bold text-custom-purple">{props.data}</h2>
        <p className="text-black font-thin">{props.name}</p>
      </div>
    </div>
     </div>
    </>
  )
}

export default Homecard
