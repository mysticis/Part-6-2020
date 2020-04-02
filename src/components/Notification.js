import React from "react"
import { connect } from "react-redux"

const Notification = props => {
  return props.notification === "" ? (
    ""
  ) : (
    <div style={{ margin: 5, border: `5px solid green`, padding: 10 }}>
      {props.notification}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    notification: state.notification
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
