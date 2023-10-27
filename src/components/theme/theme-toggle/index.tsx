'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { FaSun, FaMoon, FaRegMoon } from 'react-icons/fa'
import {ThreeCircles} from "react-loader-spinner"

interface ThemeToggleProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ThemeToggle = ({ ...props }: ThemeToggleProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  useEffect(() => setMounted(true), [])
  if (!mounted) return <><ThreeCircles height={25}/></>
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
