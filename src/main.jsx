import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'
import { FavoritesProvider } from './hooks/favorites'
import { SearchProvider } from './hooks/search'
import { Routes } from './routes'
import GlobeStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobeStyle />
      <AuthProvider>
        <SearchProvider>
          <CartProvider>
            <FavoritesProvider>
              <Routes />
            </FavoritesProvider>
          </CartProvider>
        </SearchProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  </React.StrictMode>,
)
