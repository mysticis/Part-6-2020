import React from "react"
import { useDispatch } from "react-redux"
import { getUserInput } from "../reducers/filterReducer"

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = event => {
    // input-field value is in variable event.target.value
    dispatch(getUserInput(event.target.value))
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

export default Filter
