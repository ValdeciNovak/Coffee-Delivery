import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/home'
import { CheckOut } from './components/CheckOut/checkOut'
import { DefaultLayout } from './components/layouts/defaultLayout'
import { Sucess } from './components/Success/suceess'

Routes
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
