import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api'  // URL local para desarrollo
  : 'https://api.example.com/api';  // URL de producción

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true
})

export default instance