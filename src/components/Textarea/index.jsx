import React from 'react'
import { Area } from './styles'

export function Textarea({ placeholder, value, setValue, ...rest }) {
  function autoresize(e) {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <Area
      onInput={(e) => autoresize(e)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}
