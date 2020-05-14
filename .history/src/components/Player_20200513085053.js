import React from "react";
import style from "./player.module.css";

const Player = ({ playerName }) => {
  const { playerOne, playerTwo, winner } = this.state;
  return (
    <div className={style.player}>
      <h1>{playerName}</h1>
    </div>
  );
};

export default Player;
