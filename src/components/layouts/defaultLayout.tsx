import { Outlet } from 'react-router-dom'
import { Header } from '../Header/header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
