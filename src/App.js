import React, { Component } from 'react';
import Header from './Header.js' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="game-board">
        </div>
      </div>
    );
  }
}

export default App;
