import React, { Component } from 'react';
import './App.css';
import Controls from './components/controls';
import Dashboard from './components/dashboard';
import Display from './components/display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
