'use client'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'

interface ThemeToggleProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ThemeToggle = ({ ...props }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  )
}

export default ThemeToggle
