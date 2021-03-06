import React, { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player";

const App = () => {
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const getName = (e) => {
    e.preventDefault();
  };

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
      <Player playerName="Tomek" value="0" />
      <Player playerName="Agata" />
    </div>
  );
};

export default App;
