import { Wrap } from './styles'

export function Input({ type, placeholder, label, value, ...rest }) {
  return (
    <Wrap>
      {label}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Wrap>
  )
}
