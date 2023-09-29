import { apiClient } from "./ApiClient"
export const retrieveAllTodosForUsername
    = (username) => apiClient.get(`http://localhost:8080/users/${username}/todos`)
    //http://localhost:8080/users/in28minutes/todos

export const deleteTodoApi
    = (username,id) => apiClient.delete(`http://localhost:8080/users/${username}/todos/${id}`)

export const retrieveTodoApi
    = (username,id) => apiClient.get(`http://localhost:8080/users/${username}/todos/${id}`)

export const updateTodoApi
    = (username,id,todo) => apiClient.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)

export const createTodoApi
    = (username,  todo) => apiClient.post(`/users/${username}/todos`, todo)