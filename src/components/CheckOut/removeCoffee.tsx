import { useContext } from 'react'
import { TrashIcon } from '../../assets/IconsForm/trashIcon'
import { CoffeeContext } from '../contexts/CoffeeContext'

interface CoffeeDelete {
  idCoffee: string
}
export function RemoveCoffee({ idCoffee }: CoffeeDelete) {
  const { deleteCoffee } = useContext(CoffeeContext)
  return (
    <div className="flex items-center leading-130 bg-baseButton hover:bg-baseHover pr-2 w-[5.6875rem] h-[2.375rem] rounded-md justify-center">
      <button
        type="button"
        onClick={() => deleteCoffee(idCoffee)}
        className="w-full flex items-center text-textStandard ml-2  "
      >
        <TrashIcon />
        <span className="text-title leading-130 text-sm ml-[0.2rem]">
          REMOVER
        </span>
      </button>
    </div>
  )
}
