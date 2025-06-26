import { createContext, useContext, useState } from "react";

// create auth context
const AuthContext = createContext();

// provider inside component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === 'admin' && password === 'root123') {
      setUser({ name: 'Admin' });
      return true;
    }

    return false;
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

// use context
export const useAuth = () => useContext(AuthContext);