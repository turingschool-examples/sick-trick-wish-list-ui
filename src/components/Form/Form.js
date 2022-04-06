import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stance: '',
            name: '',
            obstacle: '',
            tutorial: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form>
                <select name='stance' value={this.state.stance}>
                    <option>Choose your Stance</option>
                    <option
                        value='regular'
                        onChange={event => this.handleChange(event)}
                    >Regular                        
                    </option>
                    <option
                        value='switch'
                        onChange={event => this.handleChange(event)}
                    >Switch
                    </option>
                </select>
                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='name'
                    value={this.state.name}
                    required={true}
                    onChange={event => this.handleChange(event)}
                />
                <select name='obstacle' value={this.state.obstacle}>
                    <option>Choose your Obstacle</option>
                    <option
                        value='flatground'
                        onChange={event => this.handleChange(event)}
                    >Flatground                        
                    </option>
                    <option
                        value='ledge'
                        onChange={event => this.handleChange(event)}
                    >Ledge
                    </option>
                    <option
                        value='rail'
                        onChange={event => this.handleChange(event)}
                    >Rail
                    </option>
                    <option
                        value='stairs'
                        onChange={event => this.handleChange(event)}
                    >Stairs
                    </option>
                    <option
                        value='pool'
                        onChange={event => this.handleChange(event)}
                    >Pool
                    </option>
                </select>
                <input 
                    type='text'
                    placeholder='Link to Tutorial'
                    name='tutorial'
                    value={this.state.tutorial}
                    required={true}
                    onChange={event => this.handleChange(event)}
                />
            </form>
        )
    }
}

export default Form;