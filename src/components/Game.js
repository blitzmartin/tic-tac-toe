import React, { useState } from 'react';
import Square from './Square';

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O"

export default function Game() {
    const [ grid, setGrid ] = useState(Array(9).fill(INITIAL));

    const handleClick = () => {
        console.log("clicked")
    }
  return (
    <div>
       <Square clickedArray={grid} handleClick={handleClick}/>
    </div>
  )
}
