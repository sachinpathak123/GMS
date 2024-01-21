import React from 'react'

const Officecard = (props : any) => {
  return (
    <div className="w-[300px] h-[230px] px-1 ">
      <img
        className="  rounded-3xl w-[300px] h-[230px] object-cover"
        alt=""
        src={props.imgsource}
      />
    </div>
  )
}

export default Officecard;