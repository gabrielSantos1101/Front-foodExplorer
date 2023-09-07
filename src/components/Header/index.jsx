import { MagnifyingGlass, Receipt } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cartContext'
import { useSearch } from '../../hooks/search'
import { Button } from '../Button'
import { DropMenu } from '../DropMenu'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Menu, OpenMenu, Wrap } from './styles'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const { setSearch } = useSearch()
  const [count, setCount] = useState()
  const { getCartCount } = useCart()

  function handleMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  function handleNavigate(path) {
    setMenuOpen(false)
    navigate(path)
  }

  function handleLogout() {
    signOut()
    setMenuOpen(false)
    navigate('/')
  }

  return (
    <Wrap>
      {menuOpen && (
        <OpenMenu>
          <h1>Menu</h1>
          <label>
            <MagnifyingGlass size={28} />

            <Input
              type="search"
              placeholder={'Busque por pratos ou ingrediente'}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <div>
            <Button
              title={'Novo prato'}
              isText
              onClick={() => handleNavigate('/new')}
            />
          </div>
          <div>
            <Button title={'Sair'} isText onClick={handleLogout} />
          </div>
        </OpenMenu>
      )}
      <Menu $menuOpne={menuOpen}>
        <label className="hamburger">
          <input
            type="checkbox"
            onChange={(e) => handleMenuOpen(e.target.checked)}
            checked={menuOpen}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
      </Menu>
      <Logo />
      <label className="search">
        <MagnifyingGlass size={28} />

        <Input
          type="search"
          placeholder={'Busque por pratos ou ingrediente'}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="sideMenu">
        <button className="order">
          <p>Pedidos</p>
          {count && <span>{count}</span>}
          <Receipt size={32} />
        </button>
        <DropMenu className="dropMenu" />
      </div>
    </Wrap>
  )
}
