import anecdotesService from "../services/anecdotesService"
//import { useSelector } from "react-redux"
const reducer = (state = [], action) => {
  console.log("ACTION", action)
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.data]
    case "VOTE":
      return state.map(anecdote =>
        anecdote.id === action.updatedAnecdote.id
          ? action.updatedAnecdote
          : anecdote
      )
    case "INITIALIZE_ANECDOTES":
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: "INITIALIZE_ANECDOTES",
      data: anecdotes
    })
  }
}
export const addAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(anecdote)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    })
  }
}
export const voteAction = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.updateAnecdote(anecdote)
    dispatch({
      type: "VOTE",
      updatedAnecdote
    })
  }
}

export default reducer
