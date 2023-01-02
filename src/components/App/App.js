import { Component } from 'react';
import TricksContainer from '../TricksContainer/TricksContainer';
import './App.css';
// import { fetchData } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(data => this.setState({ tricks: data }))
      .catch(err => console.log('error', err))
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        < TricksContainer tricks={this.state.tricks}/>
      </div>
    );
  }
}

export default App;