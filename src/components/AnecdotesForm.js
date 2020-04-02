import React from "react"
import { connect } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AddNewAnecdote = props => {
  const addNew = async event => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    props.addAnecdote(newAnecdote)
    props.setNotification(`You added - "${newAnecdote}"`)
    setTimeout(() => {
      props.setNotification("")
    }, 5000)
  }
  return (
    <React.Fragment>
      <h2>Create New</h2>
      <form onSubmit={addNew}>
        <input name="anecdote" />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  )
}
export default connect(null, { addAnecdote, setNotification })(AddNewAnecdote)
