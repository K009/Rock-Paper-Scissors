import React from "react";
import style from "./player.module.css";

const Player = ({ playerName }) => {
  return (
    <div className="Player">
      <h1>{playerName}</h1>
    </div>
  );
};

export default Player;
