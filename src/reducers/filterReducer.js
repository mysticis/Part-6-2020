const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "USER_INPUT":
      return action.filterterm
    default:
      return state
  }
}

export const getUserInput = filterterm => {
  return {
    type: "USER_INPUT",
    filterterm
  }
}

export default filterReducer
