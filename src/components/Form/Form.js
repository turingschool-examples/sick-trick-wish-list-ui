import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    return (
      <form>
        <select className="dropdown" name="stance" id="stance" required>
          <option value="" disabled selected hidden>Choose your Stance</option>
          <option value="regular">Regular</option>
          <option value="switch">Switch</option>
        </select>

        <input
          type='text'
          placeholder='Name of Trick'
          name='Trick'
          value={this.state.title}
        />

        <select className="dropdown" name="obsacle" id="obsacle" required>
          <option value="" disabled selected hidden>Choose your Obstacle</option>
          <option value="flatground">Flatground</option>
          <option value="ledge">Ledge</option>
          <option value="rail">Rail'</option>
          <option value="stairs">Stairs</option>
          <option value="pool">Pool</option>
        </select> 

        <input
          type='text'
          placeholder='Link to Tutorial'
          name='Tutorial'
          value={this.state.description}
        />

        <button className="send-btn">Send it!</button>
      </form>
    )
  }
}

// export default Form;