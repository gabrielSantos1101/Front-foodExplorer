import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { useAuth } from './auth'

const favoritesContext = createContext()

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const { token } = useAuth()

  async function getFavorites() {
    try {
      if (token) {
        const { data } = await api.get('/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        })
        setFavorites(data)
      }
    } catch (err) {
      console.error(err)
      toast.error(err)
    }
  }

  async function addFavorite(id) {
    try {
      await api.post(`/favorites/${id}`)
      await getFavorites()
    } catch (err) {
      console.error(err)
      toast.error(err)
    }
  }

  async function removeFavorite(id) {
    try {
      await api.delete(`/favorites/${id}`)
      await getFavorites()
    } catch (err) {
      console.error(err)
      toast.error(err)
    }
  }

  useEffect(() => {
    getFavorites()
  }, [token])

  return (
    <favoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </favoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(favoritesContext)
  return context
}
