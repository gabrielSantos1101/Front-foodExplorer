import { useState } from 'react'
import { Wrap } from './styles'

export function Add({ title }) {
  const [Ingredient, setIngredient] = useState('')

  function autoresize(e) {
    // e.target.style.width = 'auto'
    e.target.style.width = `${e.target.scrollWidth}px`
  }

  return (
    <Wrap
      placeholder={title}
      onInput={(e) => autoresize(e)}
      value={Ingredient}
      onChange={(e) => setIngredient(e.target.value)}
    />
  )
}
