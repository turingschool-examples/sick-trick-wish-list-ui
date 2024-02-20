import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';



function App() {
  const dummyData = [
    {
      "stance": "regular",
      "name": "treflip",
      "obstacle": "flat ground",
      "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
      "id": 1
    },
    {
      "stance": "switch",
      "name": "heelflip",
      "obstacle": "stairs",
      "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
      "id": 2
    },
    {
      "stance": "regular",
      "name": "frontside 50-50, backside 180 out",
      "obstacle": "ledge",
      "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
      "id": 3
    }
  ]

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(responce => responce.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
