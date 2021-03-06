import React, { useState } from "react";
import Square from "./Square";
import Endgame from "./Endgame";

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Game() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0 });

  const isGameOver = () => {
    if (!win) {
      // X wins
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setWin(true);
          setWinCount({ ...winCount, X: winCount.X + 1 });
        }
      }

      // O wins
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setWin(true);
          setWinCount({ ...winCount, O: winCount.O + 1 });
        }
      }

      // draw game
      if (!grid.includes(INITIAL)) {
        //checks if squares are not all empty
        setDraw(true);
        setWin(true);
      }
    }
  };

  const restartGame = () => {
    setGrid(Array(9).fill(INITIAL));
    setWin(false);
    setDraw(false);
  };

  function clearHistory() {
    setWinCount({ X: 0, O: 0 });
    restartGame();
  }

  isGameOver();

  const handleClick = (id) => {
    console.log("clicked");
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  };
  return (
    <div>
      <h1>Play Tic Tac Toe!</h1>
      <span className="win-history">
        X POINTS: {winCount.X}
        <br />
        O POINTS: {winCount.O}
      </span>
      {win && (
        <Endgame
          clearHistory={clearHistory}
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          draw={draw}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}
