import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { voteAction } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      <h3>{anecdote.content}</h3>
      <div>
        Has {anecdote.votes} {anecdote.votes === 1 ? "vote" : "votes"}
        <span>
          {" "}
          <button onClick={handleVote}>Vote</button>
        </span>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter === "") {
      return state.anecdotes
    } else {
      return state.anecdotes.filter(anecdote =>
        anecdote.content.includes(state.filter)
      )
    }
  })

  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .map(anecdote => (
      <div key={anecdote.content}>
        {" "}
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => {
            dispatch(voteAction(anecdote))
            dispatch(setNotification(`You voted - ${anecdote.content}`))
            setTimeout(() => {
              dispatch(setNotification(""))
            }, 5000)
          }}
        />
      </div>
    ))
}

export default AnecdoteList
