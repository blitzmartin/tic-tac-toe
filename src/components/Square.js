import React from 'react'

export default function Square({ clickedArray, handleClick }) {
  return (
    <div className='board'>
        {clickedArray.map((item, index ) => {
            return(
                <div key={index} className='square' onClick={handleClick}></div>
            )
        })}
    </div>
  )
}
