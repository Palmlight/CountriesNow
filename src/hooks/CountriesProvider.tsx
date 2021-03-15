import { createContext, ReactNode, useContext } from "react"

import useFetch from "./FetchData"

type Props = {
  children: ReactNode
}

type CountriesContextType = {
  data: any
  setCountries?: (code: string) => any
  status: string
}

const CountriesContext = createContext<CountriesContextType>(undefined!)

export const useCountries = () => useContext(CountriesContext)

export const CountriesProvider = ({ children }: Props) => {
  const allCountries = useFetch()
  const [{ data, status }] = allCountries

  const values = { data, status }

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  )
}
