import { CardListCoffee } from './cardListCoffee'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

interface CardPaymentProps {
  formRef: React.RefObject<HTMLFormElement>
}

export function CardPayment({ formRef }: CardPaymentProps) {
  const handleSubmitClick = () => {
    formRef.current?.requestSubmit()
  }

  const { coffeeToCard } = useContext(CoffeeContext)

  const CardIsEmpty = coffeeToCard.length === 0

  const totalItems = Number(
    coffeeToCard.reduce((acumulador, coffee) => {
      const valorAtual =
        Number.parseFloat(coffee.value.replace(',', '.')) * coffee.amountCoffee
      return acumulador + valorAtual
    }, 0)
  )

  return (
    <div className="xsm:p-4 xs:p-6 md:p-10 w-[100%] md:w-[34rem] lg:w-[44.5rem] xl:w-[30rem] xsm:w-[18rem] xs:w-[22rem] sm:w-[28rem] bg-baseCard rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
      <CardListCoffee />
      <div className="w-full space-y-3 mb-6 ">
        <div className="flex  justify-between w-full">
          <span className="text-sm font-roboto font-roboto400 leading-130 text-textStandard">
            Total de itens
          </span>
          <span className="text-base font-roboto font-roboto400 leading-130 text-textStandard ">
            R$ {totalItems.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-sm font-roboto font-roboto400 leading-130 text-textStandard ">
            Entrega
          </span>
          <span className="text-base font-roboto font-roboto400 leading-130 text-textStandard">
            R$ {(coffeeToCard.length * 1.75).toFixed(2).replace('.', ',')}
            {/* deliveryValue.toFixed(2).replace('.', ',') */}
            {/* alterar colocar junto com os dados da localização */}
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="font-roboto leading-130 font-roboto700 text-subtitle text-xl">
            Total
          </span>
          <span className="font-roboto leading-130 font-roboto700 text-subtitle text-xl">
            R${' '}
            {(totalItems + coffeeToCard.length * 1.75)
              .toFixed(2)
              .replace('.', ',')}
          </span>
        </div>
      </div>
      {/* <Link to={'../sucess'}> */}
      <button
        type="button"
        onClick={handleSubmitClick}
        disabled={CardIsEmpty}
        className="bg-yellow w-full h-[2.875rem] px-2 py-3 text-white font-roboto font-roboto700 text-sm leading-160 rounded-md hover:bg-yellowDark"
      >
        CONFIRMAR PEDIDO
      </button>
      {/* </Link> */}
    </div>
  )
}
