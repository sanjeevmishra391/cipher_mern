import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logout } = useAuth();
  return (
    <nav className={`flex space-x-4 p-4 justify-end align-center ${theme === 'light' ? 'bg-sky-200' : 'bg-gray-400'}`} >
      {
        user ? 
          <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/component">Component</NavLink>
          <button className="rounded-md border-2 border-black p-1 text-sm" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'Change to dark' : 'Change to light'}</button>
          <button className="rounded-md border-2 border-black p-1 px-3 text-sm" onClick={() => logout()} >Logout</button>  
          </>
          :
          <NavLink to="/login"><button className="rounded-md border-2 border-black p-1 px-3 text-sm">Login</button></NavLink>
      }
    </nav>
  )
}