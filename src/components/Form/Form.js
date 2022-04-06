import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitTrick = event => {
    event.preventDefault();
    const newTrick = {
        ...this.state,
        id: Date.now()
    }
    this.props.addTrick(newTrick)
  }

  clearInputs = () => {
    this.setState({})
  }

  render() {
    return (
      <form>
        <select name="stance" value={this.state.stance} onChange={event => this.handleChange(event)}>
            <option value="Regular">Regular</option>
            <option value="Switch">Switch</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <select name="obstacle" vale={this.state.obstacle}onChange={event => this.handleChange(event)}>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
        </select>
        <input
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitTrick(event)}>Send it!</button>
      </form>
    )
  }
}

export default Form;
