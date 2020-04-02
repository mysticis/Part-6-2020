const notificationReducer = (state = "", action) => {
  console.log("Action", action)
  switch (action.type) {
    case "SET_MESSAGE":
      return action.message
    default:
      return state
  }
}

export const setNotification = (message, timeout) => {
  return dispatch => {
    dispatch({
      type: "SET_MESSAGE",
      message
    })
    setTimeout(() => {
      dispatch({
        type: "SET_MESSAGE",
        message: ""
      })
    }, timeout * 1000)
  }
}

export default notificationReducer
