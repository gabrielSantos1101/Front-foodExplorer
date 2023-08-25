import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Wrapper } from './styles'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </>
  )
}
