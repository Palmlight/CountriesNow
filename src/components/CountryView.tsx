import { RouteComponentProps } from "react-router"
import { useCountries } from "../hooks/CountriesProvider"

export const CountryView: React.FC<
  RouteComponentProps<{ cioc: string }>
> = props => {
  const { data } = useCountries()
  const cioc = props.match.params.cioc
  let country

  if (props.match.params.cioc) {
    country = data.filter((c: any) => c.cioc === cioc)[0]
  } else {
    return null
  }

  const { flag, name } = country

  return (
    <div className="container">
      <div className="view-container">
        <div className="flag-container">
          <img src={flag} alt={name} className="flag" />
        </div>

        <div className="details-container">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  )
}
