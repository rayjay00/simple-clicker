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
    const StyledBubble = styled.div`
    background-color: blue;
    width: 300px;
    height: 300px;
    border-radius: ${this.state.count}px;
    margin: 0 auto;
    `;
    return (
      <div className="App">
        <h2>Border Radius Clicker</h2>
        <button onClick={this.handleClick.bind(this)}>Click Me!</button>
        <p>Border Radius: {this.state.count}px</p>
        <button onClick={this.handleReset.bind(this)}>Reset</button>
        <StyledBubble size={this.state.count}></StyledBubble>
      </div>
    );
  }
}

export default App;
