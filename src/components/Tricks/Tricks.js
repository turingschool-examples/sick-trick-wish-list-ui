import React from 'react';
import TrickCard from '../TrickCard/TrickCard'

const Tricks = ({ allTricks }) => {
    let tricks = allTricks.map(trick => {
        return(
            <TrickCard 
                id={trick.id}
                key={trick.id}
                stance={trick.stance}
                name={trick.name}
                obstacle={trick.obstacle}
                tutorial={trick.tutorial}
            />
        )
    })
    return (
        <div>
            {tricks}
        </div>
    )
}

export default Tricks;