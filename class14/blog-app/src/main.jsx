import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BlogApp from './BlogApp.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <BlogApp />
    </Router>
  </StrictMode>,
)
