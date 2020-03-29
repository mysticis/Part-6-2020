import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const AddNewAnecdote = () => {
  const dispatch = useDispatch()
  const addNew = event => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(addAnecdote(anecdote))
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
