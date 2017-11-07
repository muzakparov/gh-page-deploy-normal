import { combineReducers } from "redux"

import stepNumber from "./stepNumber"
import xIsNext from "./xIsNext"
import toggleHistory from "./toggleHistory"
import history from "./history"
import isStartX from "./isStartX"


const reducers = combineReducers({
  history,
  stepNumber,
  toggleHistory,
  xIsNext,
  isStartX,
})


export default reducers