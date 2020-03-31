import axios from "axios"

const baseUrl = "http://localhost:4000/anecdotes"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async newAnecdote => {
  const newPost = { content: newAnecdote, votes: 0 }
  const response = await axios.post(baseUrl, newPost)
  return response.data
}
export default { getAll, createNew }
