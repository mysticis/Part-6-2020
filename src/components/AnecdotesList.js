import React from "react"
import { connect } from "react-redux"
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

const AnecdoteList = props => {
  const anecdotes = () => {
    if (props.filter === "") {
      return props.anecdotes
    } else {
      return props.anecdotes.filter(anecdote =>
        anecdote.content.includes(props.filter)
      )
    }
  }
  return anecdotes()
    .sort((a, b) => b.votes - a.votes)
    .map(anecdote => (
      <div key={anecdote.content}>
        {" "}
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => {
            props.voteAction(anecdote)
            props.setNotification(`You voted - ${anecdote.content}`)
            setTimeout(() => {
              props.setNotification("")
            }, 5000)
          }}
        />
      </div>
    ))
}
const mapStateToProps = state => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}
const mapDispatchToProps = {
  voteAction,
  setNotification
}
const ConnectedAnecdotesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotesList
