import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="scoreboard">
        <div className="header">
          <h1>Scoreboard</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              The Dude
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 800 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player-name">
              Mister
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 900 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
