import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  })

  function addItem(item) {
    // console.log(item)
    // setCart((prevCart) => ({
    //   ...prevCart,
    //   items: [...prevCart.items, item],
    // }))
    // console.log(cart)

    const existingItem = cart.items.find(
      (existingItem) => existingItem.id === item.id,
    )

    if (existingItem) {
      const prevCart = cart
      cart.items = [
        ...prevCart.items,
        { ...existingItem, count: existingItem.count + 1 },
      ]
    } else {
      cart.items.push(item)
    }

    setCart(cart)
    saveCart(cart)
  }

  function removeItem(id) {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.id !== id),
    }))
  }

  function clearCart() {
    setCart({
      items: [],
      total: 0,
    })
  }

  function saveCart(cart) {
    const prevCart = getCart()
    if (prevCart === cart) {
      return
    }

    const cartJson = JSON.stringify(cart)
    document.cookie = 'cart=' + cartJson
  }

  function getCart() {
    const cookies = document.cookie
    if (!cookies) {
      return undefined
    }

    const cartJson = cookies
      .split(';')
      .filter((cookie) => cookie.startsWith('cart'))[0]
      .split('=')[1]
    const cart = JSON.parse(cartJson)
    console.log(cart)
    return cart
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        saveCart,
        getCart,
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

function CartItem({ item }) {
  const { cart, addItem, removeItem } = useCart()

  const handleAdd = () => addItem(item)
  const handleRemove = () => removeItem(item.id)

  return (
    <div>
      <h3>{item.name}</h3>
      <p>R$ {item.price}</p>
      <button onClick={handleAdd}>Adicionar</button>
      <button onClick={handleRemove}>Remover</button>
    </div>
  )
}

function CartList() {
  const { cart, calculateTotal } = useCart()

  return (
    <ul>
      {cart.items.map((item) => (
        <li key={item.id}>
          <CartItem item={item} />
        </li>
      ))}
      <h3>Total: R$ {calculateTotal()}</h3>
    </ul>
  )
}
