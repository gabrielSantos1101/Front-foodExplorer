import { MagnifyingGlass, Receipt, SignIn } from '@phosphor-icons/react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { useCart } from '../../hooks/cart'
import { useSearch } from '../../hooks/search'
import { handleBack } from '../../utils/handleBack'
import { Button } from '../Button'
import { DropMenu } from '../DropMenu'
import { Input } from '../Input'
import { Logo } from '../Logo'
import { Menu, OpenMenu, Wrap } from './styles'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const page = useLocation().pathname
  const { signOut, isAdmin, token } = useAuth()
  const { setSearch, search } = useSearch()
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
    handleNavigate('/')
  }

  return (
    <Wrap $isAdmin={isAdmin}>
      {menuOpen && (
        <OpenMenu>
          <h1>Menu</h1>
          {token && (
            <label>
              <MagnifyingGlass size={28} />

              <Input
                type="search"
                placeholder={'Busque por pratos ou ingrediente'}
                value={search}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setMenuOpen()
                    page !== '/' && navigate('/')
                  }
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          )}
          {isAdmin && (
            <div>
              <Button
                title={'Novo prato'}
                isText
                onClick={() => {
                  handleNavigate('/new')
                  handleMenuOpen()
                }}
              />
            </div>
          )}
          {token ? (
            <>
              {!isAdmin && page !== '/profile' && (
                <div>
                  <Button
                    title={'Perfil'}
                    isText
                    onClick={() => {
                      navigate('/profile')
                      handleMenuOpen()
                    }}
                  />
                </div>
              )}
              {page !== '/' && (
                <div>
                  <Button
                    title={'Home'}
                    isText
                    onClick={() => {
                      handleBack(navigate)
                      handleMenuOpen()
                    }}
                  />
                </div>
              )}
              {!isAdmin && page !== '/favorites' && (
                <div>
                  <Button
                    title={'Meus favoritos'}
                    isText
                    onClick={() => {
                      navigate('/favorites')
                      handleMenuOpen()
                    }}
                  />
                </div>
              )}
              {page !== '/orders' && (
                <div>
                  <Button
                    title={'Historico de pedidos'}
                    isText
                    onClick={() => {
                      navigate('/orders')
                      handleMenuOpen()
                    }}
                  />
                </div>
              )}
              <div>
                <Button title={'Sair'} isText onClick={handleLogout} />
              </div>
            </>
          ) : (
            <div>
              <Button
                title={'Login'}
                isText
                onClick={() => {
                  navigate('/login')
                  handleMenuOpen()
                }}
              />
            </div>
          )}
        </OpenMenu>
      )}
      {token ? (
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
      ) : (
        <div className="dummy"></div>
      )}
      <Logo onClick={() => navigate('/')} />
      <label className="search">
        <MagnifyingGlass size={28} />

        <Input
          type="search"
          placeholder={'Busque por pratos ou ingrediente'}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setMenuOpen()
              page !== '/' && navigate('/')
            }
          }}
        />
      </label>
      <div className="sideMenu">
        {token ? (
          <>
            <button
              className="order"
              onClick={() => {
                isAdmin ? navigate('/new') : navigate('/orders')
              }}
              title="pedidos"
            >
              {!!getCartCount() && !isAdmin && <span>{getCartCount()}</span>}
              <p>{isAdmin ? 'Criar prato' : 'Pedidos'}</p>
              <Receipt />
            </button>
            <DropMenu className="dropMenu" />
          </>
        ) : (
          <button
            className="login"
            onClick={() => navigate('/login')}
            title="faça login"
          >
            <SignIn size={32} />
          </button>
        )}
      </div>
    </Wrap>
  )
}
