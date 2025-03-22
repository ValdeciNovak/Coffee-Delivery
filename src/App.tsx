import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import {
  CoffeeContextProvider
} from './components/contexts/CoffeeContext'

export function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <div className="w-[100%] md:px-28 lg:px-40 xsm:px-8 xs:px-20 sm:px-24 ">
          <Router />
        </div>
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}
