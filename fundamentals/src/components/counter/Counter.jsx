import React, { Component } from 'react';
import Display from './components/counter/Display'
import Buttons from './components/counter/Buttons'
import PassForm from './components/counter/PassForm'


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

    setPass = (newPass) => {
        this.setState({
            pass: newPass,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <PassForm pass={this.state.pass} setPass={this.setPass} />
                <Buttons increment={this.inc} decrement={this.dec} />
            </div>
        )
    };
};

export default Counter;