import { useForm } from 'react-hook-form'
import { MapPinFillIcon } from '../../assets/IconsForm/mapPinFill'
import { CardPayment } from './cardPayment'
import { useContext, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { CoffeeContext } from '../contexts/CoffeeContext'
import { MoneyIcon } from '../../assets/IconsForm/money'
import { DebitCardIcon } from '../../assets/IconsForm/debitCard'
import { CreditCardIcon } from '../../assets/IconsForm/creditCard'
import { CashIcon } from '../../assets/IconsForm/cashIcon'



const newCoffeeValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  rua: zod.string().min(1, 'Informe a Rua'),
  numero: zod.string().min(1, 'Informe a Número'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o Bairro'),
  cidade: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(2, 'UF inválido').max(2, 'UF inválido'),
  paymentMethod: zod.string().min(1, 'Selecione uma forma de pagamento'),
})

type FormData = zod.infer<typeof newCoffeeValidationSchema>

export function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newCoffeeValidationSchema),
    mode: 'onSubmit',
    defaultValues: {
      paymentMethod: '', // Inicializa com string vazia em vez de null
    },
  })

  const { addLocale, localeClient, coffeeToCard } = useContext(CoffeeContext)

  const navigate = useNavigate()

  const formRef = useRef<HTMLFormElement>(null)

  function handleCreateLocale(data: FormData) {
    addLocale({
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      paymentMethod: data.paymentMethod,
    })
    coffeeToCard.splice(0, coffeeToCard.length)
    navigate('../sucess')
  }

  return (
    <div className="flex justify-between flex-wrap mb-36">
      <div className="">
        <form
          ref={formRef}
          onSubmit={handleSubmit(handleCreateLocale)}
          className=""
        >
          {/* <div className="w-[40rem] h-[24.75rem] bg-baseCard p-10 rounded-md"> */}
          <div className="w-[90%] md:w-[34rem] lg:w-[44.5rem] xsm:w-[18rem] xs:w-[22rem] sm:w-[28rem] bg-baseCard p-6 md:p-10  rounded-md">
            <div className="mb-8 ">
              <div className="flex">
                <MapPinFillIcon />
                <span className="text-subtitle leading-130 text-base font-roboto400">
                  Endereço de entrega
                </span>
              </div>
              <p className="text-textStandard leading-130 font-roboto400 pl-6 text-wrap">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>

            <div className="mb-10 w-[80%] md:w-[24rem] lg:w-[36rem] xsm:w-[15rem] xs:w-[19rem] sm:w-[23rem] h-auto">
              <div className="grid grid-cols-12 gap-x-4 gap-y-5  ">
                {/* CEP */}
                <div className="col-span-4">
                  <input
                    type="text"
                    placeholder="CEP"
                    defaultValue={localeClient?.cep || ''}
                    className="w-full p-3 rounded-md border-2 focus:border-yellowDark border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('cep')}
                  />
                  {errors.cep && (
                    <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                      {errors.cep.message}
                    </span>
                  )}
                </div>

                {/* Rua - Full width */}
                <div className="col-span-12">
                  <input
                    type="text"
                    placeholder="Rua"
                    defaultValue={localeClient?.rua || ''}
                    className="w-full p-3 rounded-md focus:border-yellowDark border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('rua')}
                  />
                  {errors.rua && (
                    <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                      {errors.rua.message}
                    </span>
                  )}
                </div>

                {/* Número */}

                <div className="col-span-4">
                  <input
                    type="number"
                    placeholder="Número"
                    defaultValue={localeClient?.numero || ''}
                    className="w-full p-3 rounded-md focus:border-yellowDark border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('numero')}
                  />
                  {errors.numero && (
                    <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                      {errors.numero.message}
                    </span>
                  )}
                </div>

                {/* Complemento with Optional label */}
                <div className="col-span-8 relative">
                  <label htmlFor="complemento" className="sr-only">
                    Complemento
                  </label>
                  <input
                    type="text"
                    id="complemento"
                    placeholder="Complemento"
                    defaultValue={localeClient?.complemento || ''}
                    className="w-full peer focus:border-yellowDark p-3 items-center pe:0 sm:pe-24 rounded-md border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('complemento')}
                  />
                  <span className="pointer-events-none absolute hidden peer-[&:not(:placeholder-shown)]:hidden peer-focus:hidden inset-y-0 end-6 sm:block place-content-center text-gray-500">
                    Opcional
                  </span>
                </div>

                {/* Bottom row: Bairro + Cidade + UF */}
                <div className="col-span-4">
                  <input
                    type="text"
                    placeholder="Bairro"
                    defaultValue={localeClient?.bairro || ''}
                    className="w-full focus:border-yellowDark p-3 rounded-md border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('bairro')}
                  />
                  {errors.bairro && (
                    <span className="text-red-500 text-sm absolute flex ml-1  justify-start items-start text-nowrap">
                      {errors.bairro.message}
                    </span>
                  )}
                </div>

                <div className="col-span-4 sm:col-span-6">
                  <input
                    type="text"
                    placeholder="Cidade"
                    defaultValue={localeClient?.cidade || ''}
                    className="w-full focus:border-yellowDark p-3 rounded-md border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('cidade')}
                  />
                  {errors.cidade && (
                    <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                      {errors.cidade.message}
                    </span>
                  )}
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <input
                    type="text"
                    placeholder="UF"
                    defaultValue={localeClient?.uf || ''}
                    className="w-full focus:border-yellowDark p-3 rounded-md border-2 border-borderInput bg-baseInput text-descriptionColor focus:outline-none"
                    {...register('uf')}
                  />
                  {errors.uf && (
                    <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                      {errors.uf.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-[34rem] lg:w-[44.5rem] xsm:w-[18rem] xs:w-[22rem] sm:w-[28rem] h-auto bg-baseCard p-10 mt-3 rounded-md mb-4">
            <div className="pb-8">
              <div className="flex ">
                <div className="hidden xs:block">
                  <CashIcon color="#8047F8" />
                </div>
                <span className="text-subtitle leading-130 text-base font-roboto400 ">
                  Pagamento
                </span>
              </div>
              <div className="pl-0 xs:pl-6">
                <span className="text-textStandard leading-130 font-roboto400">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 text-center lg:grid-cols-3 ">
              <div>
                <label
                  htmlFor="credito"
                  className="flex  w-full h-[3.1875rem] cursor-pointer border-2 border-transparent rounded-lg p-4 text-textStandard bg-baseButton hover:text-subtitle  hover:bg-baseHover has-[:checked]:border-2 has-[:checked]:border-purpleBorder has-[:checked]:bg-purpleLight"
                >
                  <input
                    className="sr-only"
                    id="credito"
                    type="radio"
                    value={'Cartão de Crédito'}
                    {...register('paymentMethod')}
                  />
                  <div className="flex items-center">
                    <CreditCardIcon />
                    <span className="text-sm font-roboto leading-130 font-roboto400 ml-[0.2rem] text-nowrap overflow-visible">
                      CARTÃO DE CRÉDITO
                    </span>
                  </div>
                </label>
              </div>

              <div>
                <label
                  htmlFor="debito"
                  className="flex w-full h-[3.1875rem] cursor-pointer border-2 border-transparent rounded-lg p-4 text-textStandard bg-baseButton hover:text-subtitle  hover:bg-baseHover has-[:checked]:border-2 has-[:checked]:border-purpleBorder has-[:checked]:bg-purpleLight"
                >
                  <input
                    className="sr-only"
                    id="debito"
                    type="radio"
                    value={'Cartão de Débito'}
                    {...register('paymentMethod')}
                  />
                  <div className="flex items-center">
                    <DebitCardIcon />
                    <span className="text-sm  font-roboto leading-130 font-roboto400 ml-[0.2rem] text-nowrap overflow-visible">
                      CARTÃO DE DÉBITO
                    </span>
                  </div>
                </label>
              </div>

              <div>
                <label
                  htmlFor="dinheiro"
                  className="flex w-full h-[3.1875rem] cursor-pointer border-2 border-transparent rounded-lg p-4 text-textStandard bg-baseButton hover:text-subtitle  hover:bg-baseHover has-[:checked]:border-2 has-[:checked]:border-purpleBorder has-[:checked]:bg-purpleLight"
                >
                  <input
                    className="sr-only"
                    id="dinheiro"
                    type="radio"
                    value={'Dinheiro'}
                    {...register('paymentMethod')}
                  />
                  <div className="flex items-center">
                    <MoneyIcon />
                    <span className="text-sm font-roboto leading-130 font-roboto400 ml-[0.2rem] text-nowrap overflow-visible">
                      DINHEIRO
                    </span>
                  </div>
                </label>
              </div>
            </div>
            {errors.paymentMethod && (
              <span className="text-red-500 text-sm absolute flex ml-1 justify-start items-start text-nowrap">
                {errors.paymentMethod.message}
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="flex flex-col">
        <CardPayment formRef={formRef} />
      </div>
    </div>
  )
}
