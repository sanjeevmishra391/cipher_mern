import './App.css'
import { Routes, Route } from 'react-router-dom'
import ExpenseTracker from './pages/ExpenseTracker'
import About from './pages/About'
import Header from './components/Header'
import NestedComponent from './components/NestedComponent'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <ExpenseTracker />
              </ProtectedRoute>} />
            <Route path="/about" element={
                <About />} />
            <Route path="/component" element={
              <ProtectedRoute>
                <NestedComponent>
                  <About />
                  <ExpenseTracker />
                </NestedComponent>
              </ProtectedRoute>
            } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
