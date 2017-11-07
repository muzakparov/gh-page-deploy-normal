const history = (state = [
  {
    squares: Array(9).fill(null),
    clickedLocation: [0, 0],
  },
], action) => {
  switch (action.type) {
    case "SET_HISTORY":
      const { i, squares } = action.payload
      const x = (i % 3) + 1
      const y = Math.floor(i / 3) + 1
      
      return state.concat({
        squares,
        clickedLocation: [x, y],
      })
      
    case "UPDATE_HISTORY":
      let newState = []
      state.forEach((obj)=>{
        let newObj = Object.assign({}, obj)

        newState.push(newObj)
      }) 
      return newState.slice(0, action.payload+1)

    default:
      return state
  }
}

export default history