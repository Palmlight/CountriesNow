import { createContext, useContext, useEffect, useState } from "react"

type ThemeName = "light" | "dark"

type ThemeContextType = {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}

type Props = {
  children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>(undefined!)
export const useTheme = () => useContext(ThemeContext)

const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useState<ThemeName>("light")

  useEffect(() => {
    const darkOS = window.matchMedia("prefers-color-scheme: dark").matches
    setThemeName(darkOS ? "dark" : "light")
  }, [])

  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme: setThemeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
