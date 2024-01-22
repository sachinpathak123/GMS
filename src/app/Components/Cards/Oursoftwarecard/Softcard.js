import React from 'react'
import './Softcard.css'

const Card = (props) => {
  return (
    <>
        <div className="card-container">
        <div className = "card-image">
            <img className = "card-image" src = {props.logo}/>
            </div>
        </div>
    </>
  )
}

export default Card