import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Player from "./components/Player";

class App extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapon[0],
    winner: "",
  };
  //const [name, setName] = useState("");

  render() {
    return (
      <div className="App">
        Hello React :)
        <Player playerName="Tomek" />
        <Player playerName="Agata" />
      </div>
    );
  }
}

export default App;
