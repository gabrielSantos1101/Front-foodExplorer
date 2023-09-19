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
  const { signOut, token } = useAuth()
  const navigate = useNavigate()
  const page = useLocation().pathname

  return (
    <Wrap {...rest}>
      <DropdownMenuPrimitive.Root>
        <DropdownMenuTrigger asChild>
          <button className="IconButton" aria-label="Customise options">
            <UserCircle />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuContent sideOffset={5}>
            {page !== '/profile' && (
              <>
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
