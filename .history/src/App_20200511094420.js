import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Player from "./components/Player";

const weapon = ["rock", "paper", "scissors"];
class App extends Component {
  state = {
    playerOne: weapon[0],
    playerTwo: weapon[0],
    winner: "",
  };
  //const [name, setName] = useState("");

  selectWeapon = (weapon) => {
    this.setState({
      playerOne: weapon,
      winner: "",
    });
  };

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
        </div>
      </div>
    );
  }
}

export default App;
