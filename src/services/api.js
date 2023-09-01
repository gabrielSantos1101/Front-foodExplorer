import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    // Handle error
  },
)
