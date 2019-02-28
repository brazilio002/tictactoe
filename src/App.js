import React, { Component } from 'react';
import Header from './Header.js'
import './App.css';
import Popup from './Popup.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardBoxes: Array(9).fill(null),
      turnCount:0,
      currentPlayer: "X",
      playerOne:  [],
      playerTwo: [],
      keepPlaying: true,
      showPopup: false,
      firstTime:true
    }
  }

  checkStatus(player, playerName) {
    var gameOver = false;
    var winnerCompinations =  [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
    if(this.state.keepPlaying) {
    winnerCompinations.forEach(function(winnerCompination) {
      const found = winnerCompination.every(r=> player.indexOf(r) >= 0)
      if (found) {
        alert("Congratulation " + playerName + ", you won")
        gameOver = true;
      }
    })
    if(gameOver) {
      this.reset()
      this.setState({ showPopup: true })
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
    if(this.state.firstTime) {
      alert("this is a beta version of tic tac toe game, the 'X' player starts. ")
      this.setState({firstTime: false})
    }

  return this.state.boardBoxes.map(
    (box, index) =>
      <div className="box" key={index}
        onClick={() => this.playerClick(index)}>
        <div className="x-or-o">{box}</div>
      </div>
  )
  }

  gameOverPopup() {
    if(this.state.showPopup) {
        return <Popup  />
    }
  }

  reset = () => {
  this.setState({
    turnCount:0,
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
        <div> {this.gameOverPopup()} </div>
        <button onClick={() => this.reset()}> Reset game </button >
      </div>
    );
  }
}

export default App;
