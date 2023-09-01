import { Receipt } from '@phosphor-icons/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Menu, OpenMenu, Wrap } from './styles'

export function Header({ count }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  function handleMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  function handleNavigate(path) {
    navigate(path)
    setMenuOpen(false)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    navigate('/')
    setMenuOpen(false)
  }

  return (
    <Wrap>
      {menuOpen && (
        <OpenMenu>
          <h1>Menu</h1>
          <Input
            type="search"
            placeholder={'Busque por pratos ou ingrediente'}
            onChange={(e) => console.log(e.target.value)}
          />
          <div>
            <Button title={'Novo prato'} isText />
          </div>
          <div>
            <Button title={'Sair'} isText />
          </div>
        </OpenMenu>
      )}
      <Menu $menuOpne={menuOpen}>
        <label className="hamburger">
          <input
            type="checkbox"
            onChange={(e) => handleMenuOpen(e.target.checked)}
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
      <Input
        className="search"
        type="search"
        placeholder={'Busque por pratos ou ingrediente'}
        onChange={(e) => console.log(e.target.value)}
      />
      <button className="order">
        {count && <span>{count}</span>}
        <Receipt size={32} />
      </button>
    </Wrap>
  )
}
