import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import Car from './Car.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

// root.render(<Car />);
root.render(<App />);

