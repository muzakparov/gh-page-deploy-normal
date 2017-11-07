const isStartX = (state = 0, action) => {
  switch (action.type) {
    case "IS_START_X":
      return action.payload
    default:
      return state
  }
}

export default isStartX