import React from 'react'

const Homecard = (props:any) => {
  return (
    <>
     <div>
     <div className="bg-white shadow-2xl rounded-lg py-5 w-44 max-w-md h-56 max-h-md mb-3 mt-16">
      <div className="text-center py-2">
        <h2 className="text-18xl font-bold text-custom-purple py-3">{props.data}</h2>
        <p className="text-black font-thin py-5">{props.name}</p>
      </div>
    </div>
     </div>
    </>
  )
}

export default Homecard
