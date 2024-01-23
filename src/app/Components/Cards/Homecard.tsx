import React from 'react'

const Homecard = (props:any) => {
  return (
    <>
     <div className=''>
     <div className="bg-white shadow-lg rounded-lg py-5 w-44 max-w-md h-48 max-h-md mb-3 mt-16">
      <div className="text-center py-2">
      <img className="w-14 h-16 mx-auto mb-6" src={props.imgsource} alt="Your Logo" />
        <h2 className="text-xl font-bold text-custom-purple">{props.data}</h2>
        <p className="text-black font-thin">{props.name}</p>
      </div>
    </div>
     </div>
    </>
  )
}

export default Homecard
