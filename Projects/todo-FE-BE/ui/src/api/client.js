import axios from "axios";

// point to your backend
// if  server.js runs on http://localhost:3000:
const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err?.response?.data ?? err)
);
