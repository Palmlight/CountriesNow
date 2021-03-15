import React, { memo } from "react"
import { Link } from "react-router-dom"

interface IProps {
  flag: string
  name: string
  population: number
  region: string
  capital: string
  cioc: string
}

const Country = memo((country: any, i: number) => {
  const { flag, name, population, region, capital, cioc }: IProps = country
  return (
    <div className="country-container">
      <div className="img-container">
        <img src={flag} alt="Country Flag" className="flag" />
      </div>

      <div className="country-details">
        <h1>{name}</h1>
        <p>
          <span className="title">Population: </span>
          {population}
        </p>
        <p>
          <span className="title">Region: </span>
          {region}
        </p>
        <p>
          <span className="title">Capital: </span>
          {capital}
        </p>
        <Link to={`/countries/${cioc}`}>Read More</Link>
      </div>
    </div>
  )
})

export default Country
