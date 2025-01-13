import { CoffeeCounter } from '../Card/coffeeCounter'
import { RemoveCoffee } from './removeCoffee'
import { CoffeeContext } from '../contexts/CoffeeContext'
import { useContext } from 'react'

export function CardListCoffee() {
  const { coffeeToCard, updateCoffeeAmount } = useContext(CoffeeContext)

  const handleCountChange = (coffeeId: string, newAmount: number) => {
    updateCoffeeAmount(coffeeId, newAmount)
  }
  return (
    <>
      {coffeeToCard.map(coffee => (
        <div key={coffee.id}>
          <div className="flex items-center w-full justify-around flex-wrap md:flex-nowrap">
            <img
              src={coffee.src} // URL da imagem do artista
              alt={coffee.name} // Nome do artista para acessibilidade
              className="w-16 h-16 mb-2 md:mb-0 md:mr-5 "
            />

            <div className="flex justify-around md:justify-between w-full">
              <div className=" pl-5 ">
                <span className="text-subtitle text-base leading-130 font-roboto font-roboto400">
                  {coffee.name}
                </span>

                <div className="flex gap-2 mt-2">
                  <CoffeeCounter
                    initialValue={coffee.amountCoffee}
                    onCountChange={newAmount =>
                      handleCountChange(coffee.id, newAmount)
                    }
                  />
                  <RemoveCoffee idCoffee={coffee.id} />
                </div>
              </div>
              <span className="text-base leading-130 font-roboto font-roboto700 text-nowrap text-textStandard">
                {(
                  Number.parseFloat(coffee.value.replace(',', '.')) *
                  coffee.amountCoffee
                )
                  .toFixed(2)
                  .replace('.', ',')}
              </span>
            </div>
          </div>
          <div className=" my-[1.5625rem] w-full">
            <hr className="border-2 border-borderInput w-full  " />
          </div>
        </div>
      ))}
    </>
  )
}
