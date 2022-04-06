import React from 'react';
import './TrickCard.css';

const TrickCard = ({ name, stance, obstacle, tutorial }) => {
    return (
        <div className='trick-card'>
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle} </p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default TrickCard;
