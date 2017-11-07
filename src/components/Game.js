import React from "react"
import PropTypes from "prop-types"

import Board from "./Board"

import calculateWinner from "../helpers"


const Game = ({ history, historyGame, stepNumber, toggleHistory,
  xIsNext, isStartX, onToggleXIsNext,
  onIncrementStepNumber, onUpdateHistory,
  onHistory, onSetXIsNext,
  onSetStepNumber, onSetToggleHistory,
  onResetGame
}) => {
  const handleClick = (i) => {
    const historyClone = historyGame.slice(0, stepNumber + 1)
    const current = historyClone[stepNumber]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = xIsNext ? "X" : "O"

    //reduxing
    onToggleXIsNext(xIsNext)
    onIncrementStepNumber(stepNumber)
    onUpdateHistory(stepNumber)
    onHistory(i, squares)
  }

  const jumpTo = (stepNumber) => {
    onSetXIsNext(stepNumber, isStartX)
    onSetStepNumber(stepNumber)
  }

  const handleToggleHistory = () => {
    onSetToggleHistory()
  }

  const resetGame = () => {
    onResetGame()
    history.push("/")
  }

  const historyClone = historyGame.slice(0, stepNumber + 1)
  const current = historyClone[historyClone.length - 1]
  const squares = current.squares.slice()

  const winningSquareIndexes = calculateWinner(squares)

  const winner = winningSquareIndexes ? squares[winningSquareIndexes[0]] : null

  let status

  if (winner) {
    status = "Winner " + winner
  } else {
    status = "Next player" + (xIsNext ? "X" : "O")
  }

  let moves = historyGame.map((step, move) => {
    const desc = (move) ?
      "Go to move #(" + step.clickedLocation[0] + ", "
      + step.clickedLocation[1] + ")" :
      "Game Start"

    return (
      <li
        key={move}
        className={stepNumber === move ? "bold" : ""}
      >
        <a href="#" onClick={() => jumpTo(move)}>
          {desc}
        </a>
      </li>
    )
  })

  moves = (toggleHistory) ?
    moves.reverse()
    : moves

  console.log("----------------------------------")

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squares}
          onClick={(i) => handleClick(i)}
          winningSquareIndexes={winningSquareIndexes}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => handleToggleHistory()}>Toggle</button>
        <button onClick={() => resetGame()}>Reset Game</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

Game.propTypes = {
  historyGame: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.array.isRequired,
      clickedLocation: PropTypes.array.isRequired,
    }).isRequired
  ).isRequired,
  stepNumber: PropTypes.number.isRequired,
  toggleHistory: PropTypes.bool.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  onUpdateHistory: PropTypes.func.isRequired,
  onHistory: PropTypes.func.isRequired,
  onIncrementStepNumber: PropTypes.func.isRequired,
  onSetStepNumber: PropTypes.func.isRequired,
  onSetToggleHistory: PropTypes.func.isRequired,
  onToggleXIsNext: PropTypes.func.isRequired,
  onSetXIsNext: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
}


export default Game