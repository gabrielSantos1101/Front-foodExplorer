import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Details } from '../pages/Details'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { UpdateDish } from '../pages/UpdateDish'
import { UserPage } from '../pages/User'
import { Orders } from '../pages/orders'
import { DefaultLayout } from './Layouts'

export function AppRoutes() {
  const { isAdmin, token } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Details />} />
        {token && <Route path="/favorites" element={<Favorites />} />}
        {token && <Route path="/profile" element={<UserPage />} />}
        {isAdmin && <Route path="/new" element={<NewDish />} />}
        {isAdmin && <Route path="/update/:id" element={<UpdateDish />} />}
        {token && <Route path="/orders" element={<Orders />} />}
        {token && <Route path="*" element={<Home />} />}
      </Route>
      {!token && <Route path="/login" element={<SignIn />} />}
      {!token && <Route path="/register" element={<SignUp />} />}
      {!token && <Route path="*" element={<SignIn />} />}
    </Routes>
  )
}
