import React, { Component } from 'react';
import Header from './Header.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardBoxes: Array(9).fill(null),
    }
  }

  renderBoxes() {
  return this.state.boardBoxes.map(
    (box, index) =>
      <div className="box" key={index}>
        <div className="x-or-o">{box}</div>
      </div>
  )
}

  render() {
    return (
      <div className="container">
        <Header />
        <div className="game-board">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default App;
