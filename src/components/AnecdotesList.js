import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { voteMessage } from "../reducers/notificationReducer"
import { nullMesg } from "../reducers/notificationReducer"
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
  const anecdotes = useSelector(state => {
    console.log(state.filter)
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
            dispatch(vote(anecdote.id))
            dispatch(voteMessage(`You voted - "${anecdote.content}"`))
            setTimeout(() => {
              dispatch(nullMesg(anecdote.content))
            }, 5000)
          }}
        />
      </div>
    ))
}

export default AnecdoteList
