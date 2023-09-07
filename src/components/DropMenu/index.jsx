import { SignOut, UserCircle } from '@phosphor-icons/react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Wrap,
} from './styles'

export function DropMenu({ ...rest }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()

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
            <DropdownMenuItem onClick={() => navigate('/perfil')}>
              perfil
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={signOut}>
              Sair
              <span>
                <SignOut />
              </span>
            </DropdownMenuItem>

            <DropdownMenuPrimitive.Arrow />
          </DropdownMenuContent>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </Wrap>
  )
}
