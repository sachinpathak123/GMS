import React from 'react'
import './Softcard.css'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
        <div className = "card-image">
            <img className = "card-image" src = {props.logo}/>
            </div>
            <p className = "card-desc">
                {props.desc}
            </p>
        </div>
    </>
  )
}

export default Card