import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const Login = (data) => API.post("/auth/login", data);
export const getOrganizerProfile = (organizerId) =>
  API.get(`/organizer/${organizerId}`);
