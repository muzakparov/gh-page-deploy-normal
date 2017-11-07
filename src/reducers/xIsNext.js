const xIsNext = (state = true, action) => {
  switch (action.type) {
    case "TOGGLE_XISNEXT":
      return !action.payload
    case "SET_XISNEXT":
      return (action.payload.stepNumber + action.payload.isStartX) % 2 === 0
    case "GET_XISNEXT":
      return state
    default:
      return state
  }
}

export default xIsNext