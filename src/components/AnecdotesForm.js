import React from "react"
import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { addAnecdoteMessage } from "../reducers/notificationReducer"
import { nullMesg } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotesService"
const AddNewAnecdote = () => {
  const dispatch = useDispatch()
  const addNew = async event => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ""
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(addAnecdote(newAnecdote))
    dispatch(addAnecdoteMessage(`You added - "${anecdote}"`))
    setTimeout(() => {
      dispatch(nullMesg(anecdote))
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
