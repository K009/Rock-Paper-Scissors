import React from "react";
import style from "./player.module.css";

const Player = ({ playerName }) => {
  const { playerOne, playerTwo, winner } = this.state;
  return (
    <div className={style.player}>
      <h1>{playerName}</h1>
    </div>

            <button className="weapon" onClick={() => this.selectWeapon("rock")}>
              rock
            </button>
            <button
              className="weapon"
              onClick={() => this.selectWeapon("scissors")}
            >
              scissors
            </button>
            <button className="weapon" onClick={() => this.selectWeapon("paper")}>
              paper
            </button>

  );
};

export default Player;
