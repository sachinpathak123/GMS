import React from 'react'

const Featurelist = (props :any) => {
  return (
    <div className='justify-items-center flex flex-row'>
        <img className='' src="/bullet.svg" alt="" />
      <ul className='px-2 py-1'>{props.data}</ul>
    </div>
  )
}

export default Featurelist