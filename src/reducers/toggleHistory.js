const toggleHistory = (state=false, action) =>{
  switch(action.type){
    case "TOGGLEHISTORY":
      return !state
    case "SET_TOGGLEHISTORY":
      return action.payload
    default:
      return state
  }
}

export default toggleHistory