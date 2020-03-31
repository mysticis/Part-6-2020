//import React from "react"
import { createStore, combineReducers } from "redux"
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

const store = createStore(reducers, composeWithDevTools())
anecdotesService
  .getAll()
  .then(anecdotes => store.dispatch(initializeAnecdotes(anecdotes)))
export default store
