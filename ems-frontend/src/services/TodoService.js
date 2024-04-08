import axios from "axios";
const REST_API_BASE_URL_GET_TODO = "http://localhost:8081/api/todos/";
const REST_API_BASE_URL = "http://localhost:8081/api/todos";

export const listTodos = () => {
  return axios.get(REST_API_BASE_URL);
};
export const createTodo = (todo) => {
  return axios.post(REST_API_BASE_URL, todo);
};
export const updateTodo = (id, todo) => {
  return axios.put(REST_API_BASE_URL + "/" + id, todo);
};
export const deleteTodo = (id) => {
  console.log("deleted api called from the button");
  return axios.delete(REST_API_BASE_URL + "/" + id);
};
export const getTodo = (id) => {
  return axios.get(REST_API_BASE_URL_GET_TODO + id);
};
