import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import counterReducer from "./counterReducer"

const store = createStore(counterReducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD"
    })
  }
  const bad = () => {
    store.dispatch({
      type: "BAD"
    })
  }
  const zero = () => {
    store.dispatch({
      type: "ZERO"
    })
  }
  const okay = () => {
    store.dispatch({
      type: "OK"
    })
  }
  console.log(store.getState())
  return (
    <div>
      <div>
        <button onClick={good}>Good</button>
        <div>Good {store.getState().good}</div>
      </div>
      <div>
        <button onClick={okay}>Okay</button>
        <div>Okay {store.getState().ok}</div>
      </div>
      <div>
        <button onClick={bad}>Bad</button>
        <div>Bad {store.getState().bad}</div>
      </div>
      <div>
        <button onClick={zero}>Reset Statistics</button>
      </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"))
}

renderApp()
store.subscribe(renderApp)
