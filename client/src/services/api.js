import axios from "axios";

const api = axios.create({
  baseURL: "https://horizontechx-taskflow-realtime.onrender.com/api",
});

export default api;
