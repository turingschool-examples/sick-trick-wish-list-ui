import { Component } from 'react';
import fetchTricks from '../../apiCalls';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
      error: ''
    }
  }

  fetchAllTricks = () => {
    fetchTricks.getTrickData()
      .then(data => this.setState({tricks: data}))
      .catch(error => {
        console.log(error)
        this.setState({error: `${error}`})
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;