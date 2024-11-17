import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { OpenProvider } from './context/OpenContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OpenProvider>
      <App />
    </OpenProvider>
  </StrictMode>,
)
