import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AddNewAnecdote = () => {
  const dispatch = useDispatch()
  const addNew = async event => {
    event.preventDefault()
    const newAnecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addAnecdote(newAnecdote))
    dispatch(setNotification(`You added - "${newAnecdote}"`))
    setTimeout(() => {
      dispatch(setNotification(""))
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
export default AddNewAnecdote
