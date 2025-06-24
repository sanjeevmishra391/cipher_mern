import './App.css'
import { Routes, Route } from 'react-router-dom'
import ExpenseTracker from './pages/ExpenseTracker'
import About from './pages/About'
import Header from './components/Header'
import NestedComponent from './components/NestedComponent'
import { ThemeContext } from './context/ThemeContext'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <Routes>
          <Route path="/" element={<ExpenseTracker />} />
          <Route path="/about" element={<About />} />
          <Route path="/component" element={
            <NestedComponent>
              <About />
              <ExpenseTracker />
            </NestedComponent>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  )
}

export default App
