import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Details } from '../pages/Details'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'
import { DefaultLayout } from './Layouts'
import { AuthRoutes } from './auth.routes'

export function AppRoutes() {
  const { isAdmin, token } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        {isAdmin && <Route path="/new" element={<NewDish />} />}
        {isAdmin && <Route path="/update/:id" element={<UpdateDish />} />}
      </Route>
      {!token && <Route path="/login" element={<AuthRoutes />} />}
    </Routes>
  )
}
