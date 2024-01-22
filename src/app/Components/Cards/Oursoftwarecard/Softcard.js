import React from 'react'
import './Softcard.css'
import Image from 'next/image'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
        <div className = "card-image">
            <Image className = "card-image" src = {props.logo}/>
            </div>
        </div>
    </>
  )
}

export default Card