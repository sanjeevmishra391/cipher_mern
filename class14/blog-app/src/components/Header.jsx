import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="space-x-4 mb-4">
      <NavLink to="/">Home</NavLink>
      {user && <NavLink to="/new">New Blog</NavLink>}
      {user && <button onClick={logout} className="text-small bg-blue-200 px-4 py-1 rounded-md">Logout</button>}
      {!user && <NavLink to="/login">Login</NavLink>}
    </nav>
  )
}