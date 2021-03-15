import React from "react"
import { useTheme } from "../hooks/ThemeContext"

const NavBar = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <nav>
      <div className="container navbar">
        <h1>Where in the World?</h1>

        {isDark ? (
          <p onClick={() => setTheme("light")}>Toggle Light Mode</p>
        ) : (
          <p onClick={() => setTheme("dark")}> Toggle Dark Mode</p>
        )}
      </div>
    </nav>
  )
}

export default NavBar
