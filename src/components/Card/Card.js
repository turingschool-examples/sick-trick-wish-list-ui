import React from 'react';
import './Card.css'


const Card = ({stance, name, obstacle, tutorial}) => {
  return (
    <div className='card'>
      <h4>{`${stance} ${name}`}</h4>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Card;
