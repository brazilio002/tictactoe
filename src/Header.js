import React, { Component } from 'react';
import './header.css';
class Header extends Component {
  render(){
    return(
      <header>
        <div class="overlay">
           <h1>Tic Tac Toe</h1>
           <h3>With react js</h3>
           <br />
        </div>
      </header>
    );
  }
}

export default Header;
