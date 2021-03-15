import React from "react"
import "./App.scss"
import Countries from "./components/Countries"
import NavBar from "./components/NavBar"
import { CountriesProvider } from "./hooks/CountriesProvider"
import { useTheme } from "./hooks/ThemeContext"
import { Route, Switch } from "react-router"
import { NotFoundPage } from "./components/NotFoundPage"
import { CountryView } from "./components/CountryView"
const App = () => {
  const { theme } = useTheme()

  const isDark = theme === "dark"

  return (
    <div className={isDark ? "darkWrapper" : "lightWrapper"}>
      <NavBar />
      <CountriesProvider>
        <Switch>
          <Route component={Countries} exact={true} path="/" />
          <Route path="/countries/:cioc" component={CountryView} />
          <Route component={NotFoundPage} />
        </Switch>
      </CountriesProvider>
    </div>
  )
}

export default App
