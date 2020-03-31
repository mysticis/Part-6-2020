const reducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ANECDOTE":
      return [...state, action.data]
    case "VOTE":
      const anecdoteId = action.data.id
      const anecdoteToVote = state.find(anecdote => anecdote.id === anecdoteId)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      return state.map(anecDt =>
        anecDt.id === anecdoteId ? changedAnecdote : anecDt
      )
    case "INITIALIZE_ANECDOTES":
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = anecdote => {
  return {
    type: "INITIALIZE_ANECDOTES",
    data: anecdote
  }
}
export const addAnecdote = anecdote => {
  return {
    type: "NEW_ANECDOTE",
    data: {
      content: anecdote,
      votes: 0
    }
  }
}
export const vote = id => {
  return {
    type: "VOTE",
    data: { id }
  }
}
export default reducer
