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

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;
    if (playerOne === playerTwo) {
      console.log("It's a tie");
      return "It's a tie";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "Player one wins!";
    }
  };

  selectWeapon = (weapon) => {
    //w argumencie dostaje zmienna ktora ma ustawic dla playerOne
    this.setState({
      playerOne: weapon, //tutaj ustawia
      winner: "", //winner wciaz bez zmian wartosci - wynosi ""
    });
  };

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div className="App">
        Hello React :)
        <div className="Players">
          <Player playerName="Tomek" />
          <Player playerName="Agata" />
        </div>
        <div>
          <button className="weapon" onClick={() => this.selectWeapon("rock")}>
            rock
          </button>
          <button onClick={this.increment.bind(this)}>Plus</button>
          <output>{this.state.counter}</output>
        </div>
      </div>
    );
  }
}

export default App;
