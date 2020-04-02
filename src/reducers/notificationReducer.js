const notificationReducer = (state = "", action) => {
  console.log("Action", action)
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message
    default:
      return state
  }
}

export const setNotification = message => {
  return async dispatch => {
    dispatch({
      type: "SET_MESSAGE",
      message
    })
  }
}

export default notificationReducer
