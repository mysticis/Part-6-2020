//import React from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import anecdoteReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import anecdotesService from "./services/anecdotesService"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
const reducers = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

anecdotesService
  .getAll()
  .then(anecdotes => store.dispatch(initializeAnecdotes(anecdotes)))
console.log(store.getState())
export default store
