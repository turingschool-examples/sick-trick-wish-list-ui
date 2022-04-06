import { Component } from 'react';
import fetchTricks from '../../apiCalls';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';
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
    fetchTricks.getTrickData('http://localhost:3001/api/v1/tricks')
      .then(data => {
        console.log("trick-data", data)
        this.setState({tricks: data})
      })
      .catch(error => {
        console.log(error)
        this.setState({error: `${error}`})
      })
  }

  componentDidMount = () => this.fetchAllTricks();

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick ]})
  }

  render() {
    return (
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        {this.state.error && <p>{this.state.error}</p>}
        <Tricks allTricks={this.state.tricks}/>
      </main>
    );
  }
}

export default App;