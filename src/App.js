import React from "react"
import AnecdotesForm from "./components/AnecdotesForm"
import AnecdoteList from "./components/AnecdotesList"

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdotesForm />
    </div>
  )
}

export default App
