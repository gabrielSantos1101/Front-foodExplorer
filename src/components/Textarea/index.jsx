import React, { useState } from 'react'
import { Area } from './styles'

export function Textarea({ placeholder, value = '', setDescValue, ...rest }) {
  const [description, setDescription] = useState('')
  setDescValue(description)

  function autoresize(e) {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <Area
      onInput={(e) => autoresize(e)}
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}
