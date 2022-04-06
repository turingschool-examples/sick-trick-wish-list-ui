import React from 'react';
import Card from '../Card/Card';
import './Tricks.css';

const Tricks = ({tricks}) => {

  const trickCards = tricks.map(trick => {
    return (
      <Card
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
      {trickCards}
    </div>
  )
}

export default Tricks;
