import React from 'react'

function Trick({ id, name, obstacle, stance, tutorial}) {
  return (
    <div className='trick-item' style={{color: "black", border: "1px solid black", backgroundColor: 'ghostwhite'}}>
      <h2>{name}</h2>
      <h3>{obstacle}</h3>
      <p>{stance}</p>
      <a href={tutorial}>tutorial</a>
    </div>
  )
}

export default Trick