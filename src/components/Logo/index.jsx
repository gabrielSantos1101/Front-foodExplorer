import Icon from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { Wrap } from './styles'

export function Logo({ onClick, onFooter }) {
  const { isAdmin } = useAuth()

  return (
    <Wrap onClick={onClick}>
      <img src={Icon} alt="Logo Food Explorer" width={27} height={27} />
      <div>
        <h2>food explorer</h2>
        {isAdmin && !onFooter && <span>Admin</span>}
      </div>
    </Wrap>
  )
}
