import React, { Component } from 'react';
import Header from './Header.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardBoxes: Array(9).fill(null),
      currentPlayer: "X",
    }
  }

  playerClick(index) {
      if (this.state.boardBoxes[index] === null) {
        this.state.boardBoxes[index] = this.state.currentPlayer
        this.setState({
          currentPlayer: this.state.currentPlayer === "X" ? "O" : "X"
        })
      }
  }


  renderBoxes() {
  return this.state.boardBoxes.map(
    (box, index) =>
      <div className="box" key={index}
        onClick={() => this.playerClick(index)}>
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
