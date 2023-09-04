import jwtDecode from 'jwt-decode'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  async function signIn({ email, password }) {
    setLoading(true)
    try {
      const response = await api.post('/session', { email, password })
      const { token, user } = response.data
      localStorage.setItem('name', JSON.stringify(user.name))

      api.defaults.headers.Authorization = `Bearer ${token}`
      localStorage.setItem('token', token)

      setData({ token })
    } catch (err) {
      setLoading(false)
      console.error(err)
      toast.error('Usuário ou senha inválidos')
    }
    setLoading(false)

    function getGreeting() {
      const name = JSON.parse(localStorage.getItem('name'))
      const hora = new Date().getHours()
      if (hora >= 6 && hora < 12) {
        return `Bom dia ${name}`
      } else if (hora >= 12 && hora < 18) {
        return `Boa tarde ${name}`
      } else {
        return `Boa noite ${name}`
      }
    }
    toast(`${getGreeting()}`)
    localStorage.removeItem('name')
  }

  async function signUp({ name, email, password }) {
    try {
      api.post('/user', { name, email, password })
    } catch (err) {
      console.error(err)
    }
  }

  function signOut() {
    localStorage.removeItem('token')
    setData({})
  }

  function handleErrorFetchData(error) {
    if (error.response.status === 401) {
      toast.error(error.response.data.message)
      signOut()
    } else {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    api.defaults.headers.Authorization = `Bearer ${token}`

    if (token) {
      const { isAdmin } = jwtDecode(localStorage.getItem('token'))
      setData({ token, isAdmin: !!isAdmin })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
        signOut,
        loading,
        isAdmin: data.isAdmin,
        token: data.token,
        handleErrorFetchData,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
