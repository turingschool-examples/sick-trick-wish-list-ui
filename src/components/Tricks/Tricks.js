import React from 'react';
import TrickCard from '../TrickCard/TrickCard';
import './Tricks.css'

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
        <div className='tricks-container'>
            {tricks}
        </div>
    )
}

export default Tricks;