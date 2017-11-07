const resetGame = (state = {
  history: [
    {
      squares: Array(9).fill(null),
      clickedLocation: [0, 0],
    },
  ],
  stepNumber: 0,
  toggleHistory: false,
  xIsNext: true,
}, action) => {
  switch (action.type) {
    case "RESET_GAME":
      return state    
    default:
      return state
  }
}


export default resetGame

//NOT USED, NOT IMPORTED