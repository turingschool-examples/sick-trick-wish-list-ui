// import { Component, useEffect } from 'react';
import './App.css';
import fetchPromises from '../../data/api';
import { useState, useEffect } from 'react';
import TrickContainer from '../Trick Container/TrickContainer';

const App = () => {
  const [tricks, setTricks] = useState([])

  const getData = () => {
     fetchPromises()
    .then(data => setTricks(data))
  }

  useEffect(() => getData(), [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
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