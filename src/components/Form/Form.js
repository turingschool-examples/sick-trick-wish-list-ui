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

    submitTrick = event => {
        event.preventDefault();
        const newTrick = {
            id: Date.now(),
            ...this.state
        }
        this.props.addTrick(newTrick);
        this.clearForm();
    }

    clearForm = () => {
        this.setState({ stance: '', name: '', obstacle: '', tutorial: '' });
    }

    render() {
        return (
            <form>
                <select name='stance'>
                    <option>Choose your Stance</option>
                    <option
                        value={this.state.stance}
                        onChange={event => this.handleChange(event)}
                    >Regular                        
                    </option>
                    <option
                        value={this.state.stance}
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
                <select name='obstacle'>
                    <option>Choose your Obstacle</option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Flatground                        
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Ledge
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Rail
                    </option>
                    <option
                        value={this.state.obstacle}
                        onChange={event => this.handleChange(event)}
                    >Stairs
                    </option>
                    <option
                        value={this.state.obstacle}
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
                <button onClick={event=>this.submitTrick(event)}>Send it!</button>
            </form>
        )
    }
}

export default Form;