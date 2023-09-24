import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './auth'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const { token } = useAuth()

  function addItem(item) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart) {
      setCart((prevState) => {
        return prevState.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + item.count }
            : cartItem,
        )
      })
    } else {
      setCart([...cart, { ...item, count: item.count }])
    }
  }

  function getCartCount() {
    return cart.reduce((acc, item) => acc + item.count, 0)
  }

  function getTotalPrice() {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0)
  }

  function removeItem(id) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === id)

    if (isItemInCart) {
      if (isItemInCart.count === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== id))
      } else {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, count: cartItem.count - 1 }
              : cartItem,
          ),
        )
      }
    }
  }

  function clearCart() {
    setCart({
      items: [],
      total: 0,
    })
  }

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      setCart(JSON.parse(cartItems))
    }
  }, [token])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getCartCount,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
