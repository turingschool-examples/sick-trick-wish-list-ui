import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { getTricks } from '../../apiCalls';
import TrickList from '../TrickList/TrickList';

function App() {
  const [savedTricks, setSavedTricks] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setSavedTricks(await getTricks())
      } catch (error) {
        setFetchError(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {fetchError && <h2>{fetchError.message}</h2>}
      <TrickList savedTricks={savedTricks} />
    </div>
  );
}

export default App; 
