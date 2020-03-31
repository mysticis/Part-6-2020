import React from "react"
import { useSelector } from "react-redux"
//import { removeMessage } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notification.message)
  const style = {
    borderColor: "green",
    padding: 10,
    borderWidth: 3,
    border: "solid"
  }

  return notification === null ? "" : <div style={style}>{notification}</div>
}

export default Notification
