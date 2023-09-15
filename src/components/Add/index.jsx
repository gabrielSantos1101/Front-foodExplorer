import { Plus } from '@phosphor-icons/react'
import { useState } from 'react'
import { Wrap } from './styles'

export function Add({ onAddIngredient, placeholder, ...rest }) {
  const [value, changeValue] = useState('')

  function autoresize(e) {
    e.target.style.width = `${e.target.scrollWidth}px`
  }

  return (
    <Wrap>
      <Plus
        size={20}
        weight="bold"
        onClick={() => {
          onAddIngredient(value)
          changeValue('')
        }}
      />
      <input
        style={{ width: Math.min(Math.max(value.length, 2), 4) + 'ch' }}
        type="text"
        maxLength={36}
        placeholder={placeholder}
        value={value}
        onInput={(e) => autoresize(e)}
        onChange={(e) => {
          changeValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.stopPropagation()
            onAddIngredient(value)
            changeValue('')
          }
        }}
        {...rest}
      />
    </Wrap>
  )
}
