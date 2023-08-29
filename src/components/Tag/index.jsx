import { X } from '@phosphor-icons/react'
import { Wrap } from './styles'

export function Tag({ title, onClick, hasIcon, ...rest }) {
  return (
    <Wrap {...rest}>
      {title} {hasIcon && <X onClick={onClick} />}
    </Wrap>
  )
}
