import './App.css';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
import { getAllTricks } from '../../apiCalls';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [tricks, setTricks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllTricks()
      .then((data) => setTricks(data))
      .catch((error) =>
        setError(
          `${error.message}: Oops! Something went wrong. Please try again`
        )
      );
  });

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;
