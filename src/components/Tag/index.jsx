import { X } from '@phosphor-icons/react'
import { Wrap } from './styles'

export function Tag({ title, onClick, ...rest }) {
  return (
    <Wrap {...rest}>
      {title} <X onClick={onClick} />
    </Wrap>
  )
}
