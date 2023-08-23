import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { DefaultLayout } from './Layouts'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
