import { withRouter } from 'react-router-dom'

import { connect } from "react-redux"
import { toggleXIsNext } from "../actions"
import { setXIsNext } from "../actions"
import { setStepNumber } from "../actions"
import { toggleHistory } from "../actions"
import { setHistory } from "../actions"
import { updateHistory } from "../actions"
import { incrementStepNumber } from "../actions"
import { setToggleHistory } from "../actions"
import { isStartX } from "../actions"
//import { resetGame } from "../actions"


import Game from "../components/Game"


const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber,
    toggleHistory: state.toggleHistory,
    historyGame: state.history,
    isStartX: state.isStartX,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleXIsNext: xIsNext => {
      dispatch(toggleXIsNext(xIsNext))
    },
    onSetXIsNext: (stepNumber, isStartX) => {
      dispatch(setXIsNext(stepNumber, isStartX))
    },
    onIncrementStepNumber: stepNumber => {
      dispatch(incrementStepNumber(stepNumber))
    },
    onSetStepNumber: stepNumber => {
      dispatch(setStepNumber(stepNumber))
    },
    onSetToggleHistory: () => {
      dispatch(toggleHistory())
    },
    onHistory: (i, squares) => {
      dispatch(setHistory(i, squares))
    },
    onUpdateHistory: (stepNumber) => {
      dispatch(updateHistory(stepNumber))
    },
    onResetGame: () => {
      dispatch(setToggleHistory(false))
      dispatch(setXIsNext(false))
      dispatch(isStartX(0))
      dispatch(setStepNumber(0))
      dispatch(updateHistory(0))
    }
  }
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game)


export default withRouter(GameContainer)