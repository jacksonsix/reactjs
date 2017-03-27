import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Ts extends Component{
  render(){
    return(<h3> Ts value is {this.props.value} </h3>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React 888</h2>
          <h3>hehe</h3>
          <Ts value={90} />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
