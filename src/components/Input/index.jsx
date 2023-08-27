import { Wrap } from './styles'

export function Input({
  type,
  placeholder,
  icon: Icon,
  label,
  value,
  ...rest
}) {
  return (
    <Wrap>
      {label}
      {Icon && <Icon />}
      <input type={type} placeholder={placeholder} value={value} {...rest} />
    </Wrap>
  )
}
