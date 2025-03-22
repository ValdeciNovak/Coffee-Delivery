import { createContext, type ReactNode, useEffect, useState } from 'react'

interface Coffee {
  id: string
  name: string
  value: string
  amountCoffee: number
  src: string
}

interface LocaleForDelivery {
  bairro: string
  cep: string
  cidade: string
  complemento?: string
  numero: string
  rua: string
  uf: string
  paymentMethod: string
}

interface CoffeeContextType {
  coffeeToCard: Coffee[]
  localeClient?: LocaleForDelivery
  addCoffee: (coffee: Coffee) => void
  addLocale: (locale: LocaleForDelivery) => void
  deleteCoffee: (coffee: string) => void
  updateCoffeeAmount: (coffeeId: string, newAmount: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}
const STORAGE_KEY = '@ignite-coffee:cycles-state-1.0.0'

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const loadLocaleFromStorage = (): LocaleForDelivery | undefined => {
    try {
      const storedStateAsJSON = localStorage.getItem(STORAGE_KEY)
      return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : undefined
    } catch (error) {
      console.error('Error loading locale from storage:', error)
      return undefined
    }
  }

  const [coffeeToCard, setCoffeeToCard] = useState<Coffee[]>([])
  const [localeClient, setLocaleClient] = useState<
    LocaleForDelivery | undefined
  >(loadLocaleFromStorage)

  const addCoffee = (coffee: Coffee) => {
    const existingCoffeeIndex = coffeeToCard.findIndex(
      item => item.id === coffee.id
    )
    if (existingCoffeeIndex === -1) {
      setCoffeeToCard(prevState => [
        ...prevState,
        coffee, // Adiciona o café à lista
      ])
    } else if (
      coffeeToCard.some(c => c.id === coffee.id) &&
      coffeeToCard.some(c => c.amountCoffee !== coffee.amountCoffee)
    ) {
      setCoffeeToCard(prevState => {
        const newState = [...prevState]
        newState[existingCoffeeIndex] = coffee
        return newState
      })
    }
  }

  const addLocale = (locale: LocaleForDelivery) => {
    setLocaleClient(locale)
  }

  const deleteCoffee = (idCoffee: string) => {
    setCoffeeToCard(prevCoffee =>
      prevCoffee.filter(coffeeDelete => String(coffeeDelete.id) !== idCoffee)
    )
  }

  function updateCoffeeAmount(coffeeId: string, newAmount: number) {
    setCoffeeToCard(state =>
      state.map(coffee =>
        coffee.id === coffeeId ? { ...coffee, amountCoffee: newAmount } : coffee
      )
    )
  }

  useEffect(() => {
    if (localeClient) {
      try {
        const stateJSON = JSON.stringify(localeClient)
        localStorage.setItem(STORAGE_KEY, stateJSON)
      } catch (error) {
        console.error('Error saving locale to storage:', error)
      }
    }
  }, [localeClient])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeToCard,
        localeClient,
        addCoffee,
        addLocale,
        deleteCoffee,
        updateCoffeeAmount,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
