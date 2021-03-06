import React, { Component } from "react";
import "./App.css";
import Player from "./components/Player";

const weapon = ["rock", "paper", "scissors"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerOne: weapon[0],
      playerTwo: weapon[0],
      winner: "",
    };
    this.state = { counter: 0 };
  }

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      //to make a delay
      counter++;
      console.log(counter);
      this.setState({
        playerTwo: weapon[Math.floor(Math.random() * weapon.length)],
        winner: "",
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner(),
        });
      }
    }, 100);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    console.log("Player One: " + playerOne + "Player Two: " + playerTwo);
    if (playerOne === playerTwo) {
      console.log("It's a tie");
      return "It's a tie";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "paper" && playerTwo === "rock") ||
      (playerOne === "scissors" && playerTwo === "paper")
    ) {
      return "Player one wins!";
    } else {
      return "Player two wins!";
    }
  };

  selectWeapon = (weapon) => {
    //in argument it gets a value that is going to be set for playerOne
    this.setState({
      playerOne: weapon, //here it gets changed
      winner: "", //winner without any changes - still ""
    });
  };

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <div className="App">
        <div className="Header" />
        <div className="Players">
          <Player playerName="Tom" weapon={playerOne} />
          <Player playerName="Mary" weapon={playerTwo} />
        </div>
        <div>
          <button className="weapon" onClick={() => this.selectWeapon("rock")}>
            rock
          </button>
          <button
            className="weapon"
            onClick={() => this.selectWeapon("scissors")}
          >
            scissors
          </button>
          <button className="weapon" onClick={() => this.selectWeapon("paper")}>
            paper
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button className="start" onClick={this.startGame}>
          Start
        </button>
        <button onClick={this.increment.bind(this)}>Plus</button>
        <output>{this.state.counter}</output>
        <div className="footer" />
      </div>
    );
  }
}

export default App;
