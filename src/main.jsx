import React from 'react'
import ReactDOM from 'react-dom/client'
//import AppC from './App copy.jsx'
import './index.css'
import "@fontsource/outfit"; // Defaults to weight 400
import "@fontsource/roboto";
import App from './App';
//import App2 from './App2';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
