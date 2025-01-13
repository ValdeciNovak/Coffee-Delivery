import { Link } from 'react-router-dom'
import { CartIcon } from '../../assets/IconsMenu/Cart'
import { LocationIcon } from '../../assets/IconsMenu/Location'
import { LogoCoffee } from '../../assets/IconsMenu/LogoCoffee'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function Header() {
  const { coffeeToCard, localeClient } = useContext(CoffeeContext)

  return (
    <div className="w-full h-[6.5rem] pt-8">
      {/* <div className="w-full py-8 flex bg-black" > */}
      <div className="w-full flex justify-between items-center">
        <Link to={'../'}>
          <LogoCoffee />
        </Link>
        <div className=" flex">
          <Link to={'../checkOut'}>
            <button type="button" className=" pr-3">
              <div className="flex flex-nowrap w-auto h-[2.375rem] bg-purpleLight p-2 items-center rounded-md">
                <LocationIcon color="#8047F8" />
                <span className="text-nowrap ml-1 text-purpleDark leading-130 text-sm font-roboto font-roboto400">
                  {localeClient?.cidade && localeClient?.uf
                    ? `${localeClient.cidade}, ${localeClient.uf}`
                    : 'Adicionar localização'}
                </span>
              </div>
            </button>
          </Link>

          <Link to={'../checkOut'}>
            <button type="button" className="">
              <div className="w-[2.375rem] h-[2.375rem] bg-yellowLight rounded-md items-center flex justify-center ">
                <div className="flex absolute w-5 h-5 bg-yellowDark rounded-full items-center ml-[2rem] mt-[-2rem] justify-center">
                  <span className="font-roboto font-roboto400 leading-130 text-sm text-white ">
                    {coffeeToCard.length}
                  </span>
                </div>
                <CartIcon />
              </div>
            </button>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
