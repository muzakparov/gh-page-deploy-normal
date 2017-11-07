export const getxIsNext = () => {
  return {
    type: "GET_XISNEXT",
  }
}

export const incrementStepNumber = (stepNumber) => {
  return {
    type: "INCREMENT_STEPNUMBER",
    payload: stepNumber,
  }
}

export const isStartX = (isStartX) => {
  return {
    type: "IS_START_X",
    payload: isStartX,
  }
}

/*export const resetGame = () =>{
  return {
    type:"RESET_GAME",
  }
}*/

export const setHistory = (i, squares) => {
  return {
    type: "SET_HISTORY",
    payload: {
      i,
      squares,
    }
  }
}

export const setStepNumber = stepNumber => {
  return {
    type: "SET_STEPNUMBER",
    payload: stepNumber,
  }
}

export const setToggleHistory = toggleHistory => {
  return {
    type: "SET_TOGGLEHISTORY",
    payload: toggleHistory,
  }
}

export const setXIsNext = (stepNumber, isStartX) => {
  return {
    type: "SET_XISNEXT",
    payload: { stepNumber, isStartX },
  }
}

export const toggleHistory = () => {
  return {
    type: "TOGGLEHISTORY",
  }
}

export const toggleXIsNext = xIsNext => {
  return {
    type: "TOGGLE_XISNEXT",
    payload: xIsNext,
  }
}

export const updateHistory = (stepNumber) => {
  return {
    type: "UPDATE_HISTORY",
    payload: stepNumber,
  }
}