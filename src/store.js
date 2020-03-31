//import React from "react"
import { createStore, combineReducers } from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import { composeWithDevTools } from "redux-devtools-extension"
//import { getUserInput } from "./reducers/filterReducer"

const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducers, composeWithDevTools())
store.subscribe(() => console.log(store.getState()))
//store.dispatch(getUserInput(""))
export default store
