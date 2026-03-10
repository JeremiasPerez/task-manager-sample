import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeManager} from './components/ThemeManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeManager>
      <App />
    </ThemeManager>
  </StrictMode>,
)
