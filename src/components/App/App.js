import { Component } from "react";
import { Form } from "../Form/Form";
import { Tricks } from "../Tricks/Tricks";
import { fetchData } from "../../data/apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    }
  }

  componentDidMount () {
    fetchData()
      .then(data => {
        data.map(trick => {
          this.setState({ tricks: [...this.state.tricks, trick]});
        });
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form/>
        <Tricks allTricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;