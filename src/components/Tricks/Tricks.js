import React from 'react';
import Card from '../Card/Card';
import './Tricks.css';

const Tricks = ({tricks}) => {

  const trickCards = tricks.map(trick => {
    return (
      <Card
        id={tricks.id}
        key={tricks.id}
        stance={tricks.stance}
        name={tricks.name}
        obstacle={tricks.obstacle}
        tutorial={tricks.tutorial}
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
