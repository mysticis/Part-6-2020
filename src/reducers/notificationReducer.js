const notificationReducer = (state = { message: null }, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return { ...state, message: action.anecdote }
    case "VOTE_MESSAGE":
      return { ...state, message: action.anecdote }
    case "NULL_MESSAGE":
      return { ...state, message: null }
    default:
      return state
  }
}

export const addAnecdoteMessage = anecdote => {
  return {
    type: "ADD_NEW",
    anecdote
  }
}
export const voteMessage = anecdote => {
  return {
    type: "VOTE_MESSAGE",
    anecdote
  }
}
export const nullMesg = message => {
  return {
    type: "NULL_MESSAGE",
    message
  }
}
export default notificationReducer
