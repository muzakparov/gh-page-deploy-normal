import React from "react"
import PropTypes from "prop-types"

import Square from "./Square"


const Board = ({ winningSquareIndexes, squares, onClick }) =>{
  const renderSquare =(i) =>{
    const isWinningSquare = winningSquareIndexes?
                            (winningSquareIndexes.indexOf(i) !== -1):
                            false

    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinningSquare={isWinningSquare}
      />
    )            
  }

  let wrapper = []  

  for(let y=0;y<3;y++){
    var squareRow = []

    for(let x=0;x<3;x++){
      squareRow.push(renderSquare(y*3+x))
    }

    wrapper.push(
      <div className="board-row" key={y}>{squareRow}</div>
    )
  }

  return (
    <div>   
      {wrapper} 
    </div>
  )  
}

Board.propTypes = {
  winningSquareIndexes: PropTypes.array,
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}


export default Board