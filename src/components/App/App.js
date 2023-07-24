import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { getTricks } from '../../apiCalls';
import TrickList from '../TrickList/TrickList';

function App() {
  const [savedTricks, setSavedTricks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        setSavedTricks(await getTricks())
        setIsLoading(false);
      } catch (error) {
        setFetchError(error);
        setIsLoading(false);
      }
    })();

    return () => setFetchError(null);
  }, []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      {isLoading && <p>LOADING</p>}
      {fetchError && <h2>{fetchError.message}</h2>}
      <TrickList isLoading={isLoading} savedTricks={savedTricks}/>
    </div>
  );
}

export default App; 
