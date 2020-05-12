import React, { Component } from "react";
import "./App.css";
import Player from "./components/Player";

//Trzeba: ogarnac stany graczy jak wybieraja bron zeby funkcja selectWinner dobrze pokazywala :)

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
    const { playerTwo } = this.state;
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
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
    });

   // console.log(playerTwo);
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    console.log{"Player One: " + playerOne + "Player Two: " + playerTwo};
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
    //w argumencie dostaje zmienna ktora ma ustawic dla playerOne
    const { playerOne } = this.state;
    this.setState({
      playerOne: weapon, //tutaj ustawia
      winner: "", //winner wciaz bez zmian wartosci - wynosi ""
    });
  //  console.log("Actual playerOne's weapon: " + playerOne);
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
        Hello React :)
        <div className="Players">
          <Player playerName="Tomek" weapon={playerOne} />
          <Player playerName="Agata" weapon={playerTwo} />
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
      </div>
    );
  }
}

export default App;
