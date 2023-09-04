import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const imageApi = axios.create({
  baseURL: import.meta.env.VITE_IMAGE_API_URL,
})
