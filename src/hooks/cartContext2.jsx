import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider3({ children }) {
  const [cart, setCart] = useState([])

  function addItem(id, count) {
    console.log(id, count)
    const foundItem = cart.find((item) => item.id === id)
    if (foundItem) {
      foundItem.count += count
    } else {
      setCart([...cart, { id, count }])
    }
  }

  function removeItem(id) {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  function getCartCount() {
    cart.reduce((acc, item) => acc + item.count, 0)
  }

  return (
    <CartContext.Provider
      value={[cart, addItem, removeItem, clearCart, getCartCount]}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart3() {
  const context = useContext(CartContext)
  return context
}
