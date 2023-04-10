// import { Component, useEffect } from 'react';
import './App.css';
import fetchPromises from '../../data/api';
import { useState, useEffect } from 'react';
import TrickContainer from '../Trick Container/TrickContainer';
import Form from '../Form/Form';

const App = () => {
  const [tricks, setTricks] = useState([])

  const getData = () => {
     fetchPromises()
    .then(data => setTricks(data))
  }

  useEffect(() => getData(), [])

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  // deleteTrick = (id) => {
  //   const filterTricks = tricks.map(trick => trick.id !== id)
  //   setTricks(filterTricks)
  // }


  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <TrickContainer tricks={tricks}/>
    </div>
  )
}

export default App;






// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Sick Trick Wish List</h1>
//       </div>
//     );
//   }
// }

// export default App;