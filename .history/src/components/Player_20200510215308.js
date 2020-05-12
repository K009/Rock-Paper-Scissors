import React, { useState } from "react";
//import style from "./player.module.css";

const Player = ({ playerName }) => {
  const [option, setOption] = useState(0);
  return (
    <div>
      <h1>{playerName}</h1>
      <button
        className="submit-button"
        type="submit"
        onClick={() => setOption(option + 1)}
      >
        Stone
      </button>
      <button className="submit-button" type="submit">
        Paper
      </button>
      <button className="submit-button" type="submit">
        Scissors
      </button>
      <div>{option}</div>
    </div>
  );
};

export default Player;
