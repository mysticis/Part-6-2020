import React from "react"
import { useSelector } from "react-redux"
//import { removeMessage } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notification)

  return notification === "" ? (
    ""
  ) : (
    <div style={{ margin: 5, border: `5px solid green`, padding: 10 }}>
      {notification}
    </div>
  )
}

export default Notification
