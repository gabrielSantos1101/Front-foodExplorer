import { Route, Routes } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'
import { DefaultLayout } from './Layouts'

export function AppRoutes() {
  const { isAdmin } = useAuth()
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dish/:id" element={<Details />} />
        {isAdmin && <Route path="/new" element={<NewDish />} />}
        {isAdmin && <Route path="/update/:id" element={<UpdateDish />} />}
      </Route>
    </Routes>
  )
}
