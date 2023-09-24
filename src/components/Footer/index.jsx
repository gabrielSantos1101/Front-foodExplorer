import { Logo } from '../Logo'
import { Wrap } from './styles'

export function Footer() {
  return (
    <Wrap>
      <Logo onFooter />
      <h3>© 2023 - Todos os direitos reservados.</h3>
    </Wrap>
  )
}
