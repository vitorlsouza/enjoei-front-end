import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

class App extends Component {
  componentDidMount() {
    const response = api.get('/api/checkouts/6544');
    console.log('data1: ', response);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
