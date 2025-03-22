import { useContext, useState } from 'react'
import { ShoppingCartSimple } from '../../assets/IconCard/ShoppingCartSimple'
import data from '../../data.json'
import { CoffeeCounter } from './coffeeCounter'
import { CoffeeContext } from '../contexts/CoffeeContext'

export interface CoffeeAddToCard {
  id: string
  name: string
  amount: number
  value: string
}

export function TypesCoffees() {
  const { addCoffee } = useContext(CoffeeContext)

  const [coffeeAmounts, setCoffeeAmounts] = useState<Record<string, number>>({})

  const handleCountChange = (coffeeId: string, amount: number) => {
    setCoffeeAmounts(prev => ({
      ...prev,
      [coffeeId]: amount,
    }))
  }

  return (
    <div className="mt-10 lg:mt-[8.75rem] mb-[7.3125rem]">
      <h2 className="text-subtitle block text-[2rem] font-baloo font-baloo800 leading-130 mb-[3.375rem]">
        Nossos cafés
      </h2>
      <div className="flex flex-wrap justify-center w-full">
        {data.coffees.map(coffee => (
          <div key={coffee.id} className="sm:pr-8 pb-10">
            <div className="w-64 h-[19.375rem]  justify-start items-center flex-wrap flex flex-col bg-baseCard rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
              <div className="flex flex-row mt-[-1rem]">
                <img
                  src={coffee.image} // URL da imagem do artista
                  alt={coffee.title} // Nome do artista para acessibilidade
                  className="w-[7.5rem] h-[7.5rem]"
                />
              </div>
              <div className="w-full flex justify-center">
                {coffee.tags.map(tag => (
                  <div
                    key={tag}
                    className="p-2 h-[1.3125rem] bg-yellowLight flex justify-center items-center mr-2 mt-3 rounded-full"
                  >
                    <span className="font-roboto font-roboto700 text-[0.625rem] leading-130 text-yellowDark">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
              <span className="  font-baloo700 text-xl leading-130 text-subtitle mt-4 mb-2">
                {coffee.title}
              </span>
              <span className="text-descriptionColor px-5 text-center leading-130 text-sm font-roboto font-roboto400">
                {coffee.description}
              </span>
              <div className="flex mt-[2.0625rem]">
                <span className="leading-130 text-sm font-roboto font-roboto400 text-textStandard mr-[1.4375rem]">
                  R$
                  <span className="text-2xl leading-130 font-baloo font-baloo800">
                    {' '}
                    {coffee.price}
                  </span>
                </span>

                <CoffeeCounter
                  onCountChange={amount => handleCountChange(coffee.id, amount)}
                />

                <button
                  type="submit"
                  onClick={() =>
                    addCoffee({
                      id: coffee.id,
                      name: coffee.title,
                      value: coffee.price,
                      amountCoffee: coffeeAmounts[coffee.id] || 1,
                      src: coffee.image,
                    })
                  }
                  className="w-[2.375rem] h-[2.375rem] ml-2 bg-purpleDark hover:bg-purple p-2 rounded-md"
                >
                  <div>
                    <ShoppingCartSimple />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
