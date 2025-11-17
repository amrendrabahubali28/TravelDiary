import axios from "axios"

const BASE_URL = "http://localhost:3000/api"

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL||BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
