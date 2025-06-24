import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className={`flex space-x-4 p-4 justify-end align-center ${theme === 'light' ? 'bg-sky-200' : 'bg-gray-400'}`} >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/component">Component</NavLink>
      <button className="rounded-md border-2 border-black p-1 text-sm" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{ theme === 'light' ? 'Change to dark' : 'Change to light' }</button>
    </nav>
  )
}