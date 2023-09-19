import { SignOut, UserCircle } from '@phosphor-icons/react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Wrap,
} from './styles'

export function DropMenu({ ...rest }) {
  const { signOut, token, isAdmin } = useAuth()
  const navigate = useNavigate()
  const page = useLocation().pathname
  const userAvatar = localStorage.getItem('user')

  return (
    <Wrap {...rest}>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuTrigger asChild>
          <button className="IconButton" aria-label="Customise options">
            {!!userAvatar === true ? (
              <img src={userAvatar} alt="imagem de perfil" />
            ) : (
              <UserCircle />
            )}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuContent sideOffset={5}>
            {!isAdmin ? (
              <>
                {page !== '/profile' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
              </>
            ) : (
              <>
                {page !== '/new' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/new')}>
                      Novo
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
              </>
            )}

            {token ? (
              <>
                {page !== '/favorites' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/favorites')}>
                      Favoritos
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                {page !== '/orders' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/orders')}>
                      Historico
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onClick={signOut}>
                  Sair
                  <span>
                    <SignOut />
                  </span>
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem onClick={() => navigate('/login')}>
                Login
              </DropdownMenuItem>
            )}

            <DropdownMenuPrimitive.Arrow />
          </DropdownMenuContent>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </Wrap>
  )
}
