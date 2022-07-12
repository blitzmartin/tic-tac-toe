import React from 'react'

export default function Endgame({ restartGame, player, draw }) {
  return (
    <div className='endgame'>
      {!draw && <span className="win-text">{player ? "O WINS" : "X WINS"}</span>}
      {draw && <span className="win-text">DRAW GAME</span>}
        <button className='btn' onClick={restartGame}>RESTART GAME</button>
        <button className='btn'>CLEAR HISTORY</button>
    </div>
  )
}
