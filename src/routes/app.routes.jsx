import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { UpdateDish } from '../pages/UpdateDish'
import { Details } from '../pages/details'
import { DefaultLayout } from './Layouts'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/new" element={<NewDish />} />
        <Route path="/update" element={<UpdateDish />} />
      </Route>
    </Routes>
  )
}
