import React from "react";
import style from "./player.module.css";

const Player = ({ playerName }) => {
  return (
    <div className={style.player}>
      <h1>{playerName}</h1>

      <button className="weapon">rock</button>
    </div>
  );
};

export default Player;
