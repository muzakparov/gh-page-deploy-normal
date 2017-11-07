const stepNumber = (state=0, action) => {
  switch (action.type) {    
    case "SET_STEPNUMBER":    
      return action.payload
    case "INCREMENT_STEPNUMBER":
      return (action.payload+1)
    default:
      return state
  }
}

export default stepNumber