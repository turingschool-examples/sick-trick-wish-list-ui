import React from 'react';

const Tricks = ({ allTricks }) => {
    let tricks = allTricks.map(trick => {
        return(
            <div>
                <p>{trick.stance} {trick.name}</p>
                <p>Obstacle: {trick.obstacle} </p>
                <a href={trick.tutorial}>{trick.tutorial}</a>
            </div>
        )
    })
    return (
        <div>
            {tricks}
        </div>
    )
}

export default Tricks;