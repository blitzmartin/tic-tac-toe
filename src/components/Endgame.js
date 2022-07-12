import React from "react";

export default function Endgame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="endgame">
      {!draw && (
        <span className="win-text">{player ? "O WINS" : "X WINS"}</span>
      )}
      {draw && <span className="win-text">DRAW GAME</span>}
      <span className="win-history">
        X POINTS: {winCount.X}
        <br />
        O POINTS: {winCount.O}
      </span>
      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>CLEAR HISTORY</button>
    </div>
  );
}
