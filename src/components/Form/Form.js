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
        <select name="stance">
            <option value="Regular">Regular</option>
            <option value="Obstacle">Saab</option>
        </select>
        <input
          type='text'
          placeholder='Name of Trick'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <select name="obstacle">
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool">Pool</option>
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
