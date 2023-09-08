import { createContext, useContext, useDeferredValue, useState } from 'react'

export const SearchContext = createContext()

export function SearchProvider({ children }) {
  const [search, setSearch] = useState('')
  const searchQuery = useDeferredValue(search)

  return (
    <SearchContext.Provider value={{ searchQuery, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
