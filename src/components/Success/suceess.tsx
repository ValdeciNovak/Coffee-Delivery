import { useContext } from 'react'
import { CashIcon } from '../../assets/IconsForm/cashIcon'
import { ClockIcon } from '../../assets/IconsHome/ClockIcon'
import { LocationIcon } from '../../assets/IconsMenu/Location'
import { SuccessImage } from '../../assets/IconsSuccess/sucessImage'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function Sucess() {
  const { localeClient } = useContext(CoffeeContext)

  const deliveryTime = Math.random() * (50 - 10) + 10

  return (
    <div className="w-full h-full mb-10">
      <div className="flex flex-col mt-20">
        <h1 className="font-baloo text-yellowDark leading-130 text-[2rem] font-baloo800">
          Uhu! Pedido confirmado
        </h1>
        <span className="font-roboto font-roboto400 leading-130 text-xl text-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </div>
      <div className="flex items-center flex-wrap w-full">
        <div className="h-auto p-[1.3px] w-full sm:w-[33.5rem] rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md mt-2 sm:mt-10 sm:mr-[6.375rem] bg-gradient-to-br from-yellow to-purple ">
          <div className="bg-white w-full rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md p-10 space-y-8">
            <div className="flex space-x-3">
              <div className="min-w-8 h-8 flex justify-center items-center bg-purple rounded-full">
                <LocationIcon />
              </div>
              <div>
                <div className="flex gap-1 flex-wrap">
                  <span className=" leading-130 text-textStandard font-roboto font-roboto400 text-base">
                    Entrega em
                  </span>
                  <span className="leading-130 text-textStandard font-roboto font-roboto700 text-base">
                    {localeClient?.rua}, {localeClient?.numero}
                  </span>
                </div>

                <span className="leading-130 text-textStandard font-roboto font-roboto400 text-base">
                  {localeClient?.bairro} - {localeClient?.cidade},{' '}
                  {localeClient?.uf}
                </span>
              </div>
            </div>
            <div className="flex space-x-3 items-center flex-wrap">
              <div className="min-w-8 h-8 flex justify-center items-center rounded-full bg-yellow">
                <ClockIcon />
              </div>
              <div>
                <span className="block leading-130 text-textStandard font-roboto font-roboto400 text-base">
                  Previsão de entrega
                </span>
                <span className="leading-130 text-textStandard font-roboto font-roboto700 text-base">
                  {deliveryTime.toFixed(0)} min -{' '}
                  {(deliveryTime + 10).toFixed(0)} min
                </span>
              </div>
            </div>
            <div className="flex space-x-3 items-center flex-wrap">
              <div className="min-w-8 h-8 flex justify-center items-center rounded-full bg-yellowDark">
                <CashIcon />
              </div>
              <div>
                <span className="block leading-130 text-textStandard font-roboto font-roboto400 text-base">
                  Pagamento na entrega
                </span>
                <span className="leading-130 text-textStandard font-roboto font-roboto700 text-base">
                  {localeClient?.paymentMethod}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center lg:w-[29.75rem] lg:h-[22.5rem] sm:h-72 w-60 h-44 xsm:w-full ">
          <SuccessImage />
        </div>
      </div>
    </div>
  )
}
