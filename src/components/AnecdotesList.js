import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      {anecdote.content}
      <div>
        Has {anecdote.votes} votes
        <button onClick={handleVote}>Vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)
  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .map(anecdote => (
      <div key={anecdote.content}>
        {" "}
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => dispatch(vote(anecdote.id))}
        />
      </div>
    ))
}

export default AnecdoteList
