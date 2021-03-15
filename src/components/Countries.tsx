import React, { memo } from "react"
import { useCountries } from "../hooks/CountriesProvider"
import Country from "./Country"
import { Loading } from "./Loading"

const Countries = memo(() => {
  const { data, status } = useCountries()
  console.log(status)
  console.log(data)

  return (
    <div className="container countries-container">
      {status === "fetching" && <Loading />}
      {data &&
        data.map((country: {}, i: number) => <Country key={i} {...country} />)}
    </div>
  )
})

export default Countries
