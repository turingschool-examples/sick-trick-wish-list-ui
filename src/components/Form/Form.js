import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      link: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
        <select name="stance" onChange={event => this.handleChange(event)}>
            <option value={this.state.stance}>Regular</option>
            <option value={this.state.stance}>Saab</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <select name="obstacle" onChange={event => this.handleChange(event)}>
          <option value={this.state.obstacle}>Flatground</option>
          <option value={this.state.obstacle}>Ledge</option>
          <option value={this.state.obstacle}>Rail</option>
          <option value={this.state.obstacle}>Stairs</option>
          <option value={this.state.obstacle}>Pool</option>
        </select>
        <input
          type='text'
          placeholder='Link to Tutorial'
          name='link'
          value={this.state.link}
          onChange={event => this.handleChange(event)}
        />
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
