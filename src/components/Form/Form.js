import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
        stance: '',
        trick: '',
        obstacle: '',
        tutorial: ''
    }
  }

  clearInputs = () => {
    this.setState({
      stance: '',
      trick: '',
      obstacle: '',
      tutorial: ''
    })
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitTrick = event => {
    event.preventDefault()
    this.props.addTrick(this.state.stance, this.state.trick, this.state.obstacle, this.state.tutorial)
    this.clearInputs();
  }

  render() {
    return (
      <form>
        <select name="stance" id="stance" required value={this.state.stance} onChange={this.handleChange}>
          <option defaultValue="" hidden>Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='trick'
          value={this.state.trick}
          onChange={event => this.handleChange(event)}
          required
        />

        <select name="obstacle" id="Obstacle" required value={this.state.obstacle} onChange={this.handleChange}>
          <option defaultValue="" hidden>Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select> 

        <input
          type='text'
          placeholder='Link to Tutorial'
          name='tutorial'
          value={this.state.tutorial}
          onChange={event => this.handleChange(event)}
          required
        />

        <button className="send-btn" onClick={this.submitTrick}>Send it!</button>
      </form>
    )
  }
}

// export default Form;