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
                <select name={this.state.stance}>
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
            </form>
        )
    }
}

export default Form;