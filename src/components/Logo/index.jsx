import logo from '../../assets/favicon.svg'
import { Wrap } from './styles'

export function Logo() {
  return (
    <Wrap>
      <img src={logo} alt="Logo Food Explorer" />
      <h1>food explorer</h1>
    </Wrap>
  )
}