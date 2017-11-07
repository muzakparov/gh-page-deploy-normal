import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"

import reducers from "./reducers"


const middleWare = applyMiddleware(logger)

const store = createStore(reducers, middleWare)

export default store