import axios from 'axios'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
const instance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true
})

export default instance