import React from "react"
import { connect } from "react-redux"
import { getUserInput } from "../reducers/filterReducer"

const Filter = props => {
  const handleChange = event => {
    // input-field value is in variable event.target.value
    props.getUserInput(event.target.value)
  }
  const style = {
    margin: 15
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(null, { getUserInput })(Filter)
