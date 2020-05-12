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

  render() {
    return (
      <div className="App">
        Hello React :)
        <div className="Players">
          <Player playerName="Tomek" />
          <Player playerName="Agata" />
        </div>
      </div>
    );
  }
}

export default App;
