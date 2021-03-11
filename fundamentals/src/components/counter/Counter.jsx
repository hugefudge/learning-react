import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number: this.props.initialNumber || 0,
        pass: this.props.initialPass || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.pass,
        });
    };
    dec = () => {
        this.setState({
            number: this.state.number - this.state.pass,
        });
    };

    setPass = (event) => {
        this.setState({
            pass: +event.target.value,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <div>
                    <label htmlFor='passInput'>Passo: </label>
                    <input id='passInput' type='number' value={this.state.pass} onChange={this.setPass} />
                </div>
                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div>
        )
    };
};

export default Counter;