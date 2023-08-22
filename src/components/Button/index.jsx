import { Wrap } from './styles'

export function Button({ title, isText = false, isCenter = false, onClick }) {
  return (
    <Wrap $istext={isText} $iscenter={isCenter} onClick={onClick}>
      {title}
    </Wrap>
  )
}
