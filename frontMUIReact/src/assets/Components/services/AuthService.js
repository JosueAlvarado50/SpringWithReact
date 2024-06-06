import axios from "axios";
const AUTH_REST_API_BASE_URL = "http://localhost:8081/api/auth";
const USERNAME = "admin";
const PASSWORD = "admin";
export function registerAPICall(registerObj) {
  const headers = {
    Authorization: "Basic " + btoa(USERNAME + ":" + PASSWORD),
    "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
  };
  return axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj, {
    headers: headers,
  });
}
export function loginAPICall(registerObj) {
  const headers = {
    Authorization: "Basic " + btoa(USERNAME + ":" + PASSWORD),
    "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
  };
  return axios.post(AUTH_REST_API_BASE_URL + "/login", registerObj, {
    headers: headers,
  });
}
