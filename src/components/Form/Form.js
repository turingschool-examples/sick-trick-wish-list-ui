import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      stance: '',
      obstacle: ''
    }
  }

  handleName(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return(
      <form>
        <label> Name:
          <input 
            type='text'
            name='name'
            value={this.state.name}
            onChange={(event) => this.handleName(event)}
          />
        </label>
        <label> Stance: 
          <select className='stance'>
            <option></option>
            <option>Regular</option>
            <option>Switch</option>
          </select>
        </label>
      <label> Obstacle:
        <select className='obstacle'>
          <option></option>
          <option>Flatground</option>
          <option>Ledge</option>
          <option>Rail</option>
          <option>Stairs</option>
          <option>Pool</option>
        </select>
      </label>
      </form>
    )
  }
}

export default Form