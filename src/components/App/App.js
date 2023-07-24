import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { getTricks } from '../../apiCalls';

function App() {
  const [savedTricks, setSavedTricks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await getTricks()
      } catch (error) {
        setFetchError(error);
      }
    })()
  }, [savedTricks]);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {fetchError && <h2>{fetchError.message}</h2>}
    </div>
  );
}

export default App; 
