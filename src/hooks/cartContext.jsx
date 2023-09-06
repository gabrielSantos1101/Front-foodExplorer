import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  function addItem(item) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + item.count }
            : cartItem,
        ),
      )
    } else {
      setCart([...cart, { ...item, count: item.count }])
    }
  }

  function removeItem(id) {
    const isItemInCart = cart.find((cartItem) => cartItem.id === id)

    if (isItemInCart.quantity === 1) {
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
  }, [])

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
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
