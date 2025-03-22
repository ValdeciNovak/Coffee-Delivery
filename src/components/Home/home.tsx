import { ClockIcon } from '../../assets/IconsHome/ClockIcon'
import { CoffeeIcon } from '../../assets/IconsHome/CoffeeIcon'
import { CoffeeImage } from '../../assets/IconsHome/CoffeeImage'
import { CardIcon } from '../../assets/IconsHome/IconCard'
import { PackagingIcon } from '../../assets/IconsHome/PackagingIcon'
import { TypesCoffees } from '../Card/typesCoffees'

export function Home() {
  return (
    <>
      <div className=" w-full h-full flex flex-wrap pt-[5.875rem] mr-2">
        <div className="flex flex-col pr-14">
          <div className="w-full sm:w-[36.75rem]">
            <div className="sm:h-48">
              <h1 className="font-baloo font-baloo800 text-title text-wrap text-3xl sm:text-5xl leading-130">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <span className="font-roboto font-roboto400 text-wrap text-subtitle text-xl leading-130">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-5 pt-[4.125rem]  ">
              <div className=" flex items-center w-full">
                <div>
                  <CardIcon />
                </div>
                <span className="pl-3 w-full text-textStandard font-roboto font-roboto400 text-base leading-130 text-wrap">
                  Compra simples e segura
                </span>
              </div>
              <div className=" flex w-full items-center ">
                <div>
                  <PackagingIcon />
                </div>
                <span className="pl-3 w-full text-textStandard font-roboto font-roboto400 text-base leading-130 text-wrap">
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div className=" flex items-center w-full ">
                <div>
                  <ClockIcon />
                </div>
                <span className="pl-3 w-full text-textStandard font-roboto font-roboto400 text-base leading-130 text-wrap">
                  Entrega rápida e rastreada
                </span>
              </div>
              <div className=" flex w-full items-center">
                <div>
                  <CoffeeIcon />
                </div>
                <span className="pl-3 w-full text-textStandard font-roboto font-roboto400 text-base leading-130 text-nowrap">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center lg:w-[29.75rem] lg:h-[22.5rem] sm:h-72 w-60 h-44 xsm:w-full ">
          <CoffeeImage />
        </div>
      </div>
      <div>
        <TypesCoffees />
      </div>
    </>
  )
}
