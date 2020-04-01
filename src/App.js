import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import AnecdotesForm from "./components/AnecdotesForm"
import AnecdoteList from "./components/AnecdotesList"
import Notification from "./components/Notification"
import Filter from "./components/Filter"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdotesForm />
    </div>
  )
}

export default App
