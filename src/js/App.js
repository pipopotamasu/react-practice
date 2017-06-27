import React, { Component } from 'react';
import Counter from './Counter'
import logo from '../image/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="Apps">
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
