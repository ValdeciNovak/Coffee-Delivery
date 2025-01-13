import { useState } from 'react'

interface propsCounterCoffee {
  onCountChange?: (newCount: number) => void
  initialValue?: number
}

export function CoffeeCounter({
  onCountChange,
  initialValue = 1,
}: propsCounterCoffee) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    const newCount = count < 20 ? count + 1 : 20
    setCount(newCount)
    onCountChange?.(newCount)
  }

  const decrement = () => {
    const newCount = count > 1 ? count - 1 : 1
    setCount(newCount)
    onCountChange?.(newCount)
  }

  return (
    <div className="flex items-center gap-2  leading-130 bg-baseButton hover:bg-baseHover w-[5.2rem] h-[2.375rem] rounded-md justify-center">
      {/* <div className=" w-full h-full"> */}
      <button
        type="button"
        onClick={decrement}
        className="text-3xl leading-130 mt-[-0.5rem] text-purpleText bold hover:text-purpleDark"
      >
        -
      </button>
      <span className="text-title leading-130 w-4  text-center mt-[-0.2rem] text-lg">
        {count}
      </span>
      <button
        type="button"
        onClick={increment}
        className="text-3xl leading-130 mt-[-0.5rem] bold text-purpleText hover:text-purpleDark"
      >
        +
      </button>
      {/* </div> */}
    </div>
  )
}
