import React, { Component } from 'react';
import Header from './Header.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardBoxes: Array(9).fill(null),
      currentPlayer: "X",
      turnCount:0,
      currentPlayer: "X",
      playerOne:  [],
      playerTwo: [],
      winner: null,
      keepPlaying: true
    }
  }

  checkStatus(player, playerName) {
    var gameOver = false;
    var winnerCompinations =  [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
    if(this.state.keepPlaying) {
    winnerCompinations.forEach(function(winnerCompination) {
      const found = winnerCompination.every(r=> player.indexOf(r) >= 0)
      if (found) {
        alert("Congratulation " + playerName)
        gameOver = true;
      }
    })
    if(gameOver) {
      this.reset()
    }
  }
  }

  playerClick(index) {
      if(this.state.keepPlaying) {
        if (this.state.boardBoxes[index] === null) {
          this.state.boardBoxes[index] = this.state.currentPlayer
          this.setState({
            currentPlayer: this.state.currentPlayer === "X" ? "O" : "X"
          })

          this.IncrementItem()

          if (this.state.turnCount % 2 === 0) {
            this.state.playerOne.push(index)
            /* alert(this.state.playerOne) */
            this.checkStatus(this.state.playerOne, "player One")
            if (this.state.playerOne.length == 5) {
              alert("Tie, retry again")
              this.reset()
            }
          }

          else {
            this.state.playerTwo.push(index)
            /* alert(this.state.playerTwo) */
            this.checkStatus(this.state.playerTwo, "player two")
          }
        }
      }
    }

  IncrementItem = () => {
    this.setState({ turnCount: this.state.turnCount + 1 });
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

  reset = () => {
  this.setState({
    currentPlayer: "X",
    boardBoxes: Array(9).fill(null),
    keepPlaying: true,
    playerOne:  [],
    playerTwo: []
  })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="game-board">
          {this.renderBoxes()}
        </div>
        <button onClick={() => this.reset()}> Reset game </button >
      </div>
    );
  }
}

export default App;
