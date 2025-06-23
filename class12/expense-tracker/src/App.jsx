import './App.css'
import EffectComponent from './components/EffectComponent'
import Clock from './components/Clock'
import ExpenseTracker from './components/expense-tracker/ExpenseTracker'
import { Route, Routes, NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <nav className='flex space-x-4 bg-gray-400 p-4'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/effect">Effect</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<ExpenseTracker />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/effect' element={<EffectComponent />} />
      </Routes>
    </>
  )
}

export default App
