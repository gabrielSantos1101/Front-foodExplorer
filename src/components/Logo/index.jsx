import Icon from '../../assets/logo.svg'
import { Wrap } from './styles'

export function Logo() {
  return (
    <Wrap>
      <img src={Icon} alt="Logo Food Explorer" width={27} height={27} />
      <h2>food explorer</h2>
    </Wrap>
  )
}
