import React from 'react';

const TrickCard = ({ name, stance, obstacle, tutorial }) => {
    return (
        <div>
            <p>{stance} {name}</p>
            <p>Obstacle: {obstacle} </p>
            <a href={tutorial}>{tutorial}</a>
        </div>
    )
}

export default TrickCard;
