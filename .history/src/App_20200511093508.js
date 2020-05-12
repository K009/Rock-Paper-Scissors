import React, { useEffect, useState, Component } from "react";
import "./App.css";
import Player from "./components/Player";

class App extends Component{
  state = {
    playerOne: weapon[0],
    playerTwo: weapon[0],
    winner: ""
  };
  const [name, setName] = useState("");

  render () {
  return (
    <div className="App">
      Hello React :)
      <form onSubmit={getName} className="search-form">
        <input
          className="name"
          type="text"
          value={name}
          onChange={updateName}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <Player playerName="Tomek" />
      <Player playerName="Agata" />
    </div>
  );
  }
};

export default App;
