import { Wrap } from './styles'

export function Input({ type, placeholder, label, ...rest }) {
  return (
    <Wrap>
      {label}
      <input type={type} placeholder={placeholder} {...rest} />
    </Wrap>
  )
}
