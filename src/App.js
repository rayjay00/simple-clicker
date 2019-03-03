import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  state = {
    count: 0
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleReset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Simple Clicker</h2>
        <button onClick={this.handleClick.bind(this)}>Click Me!</button>
        <p>Times Clicked: {this.state.count}</p>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default App;
