import { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider2({ children }) {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + item.count }
            : cartItem,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...item, count: item.count }])
    }
  }

  function removeFromCart(item) {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count - 1 }
            : cartItem,
        ),
      )
    }
  }

  function clearCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      setCartItems(JSON.parse(cartItems))
    }
  }, [])

  useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart2() {
  const context = useContext(CartContext)
  return context
}
