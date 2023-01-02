import React from 'react'
import './Trick.css'

function Trick({ id, name, obstacle, stance, tutorial}) {
  return (
    <div className='trick-item'>
      <h2>{name}</h2>
      <h3>{obstacle}</h3>
      <p>{stance}</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Trick