import {
  createContext,
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
import { useAuth } from './auth'

export const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [categories, setCategories] = useState([])
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState('')
  const { token, handleErrorFetchData } = useAuth()
  const searchQuery = useDeferredValue(search)

  useEffect(() => {
    async function getDishs() {
      if (token) {
        try {
          const response = await api.get(`/dishes?search=${searchQuery}`)

          setCategories(
            response.data.reduce((acc, item) => {
              if (!acc.includes(item.category)) {
                acc.push(item.category)
              }
              return acc
            }, []),
          )

          setMeals(
            await response.data.filter((item) => item.category === 'Refeição'),
          )
          setDesserts(
            await response.data.filter((item) => item.category === 'Sobremesa'),
          )
          setDrinks(
            await response.data.filter((item) => item.category === 'Bebida'),
          )
        } catch (err) {
          console.error(err)
          handleErrorFetchData(err)
        }
      }
    }
    getDishs()
  }, [searchQuery, token])

  return (
    <SearchContext.Provider
      value={{ categories, meals, desserts, drinks, setSearch }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
