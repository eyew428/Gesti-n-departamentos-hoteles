import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'
import PropertyForm from './components/PropertyForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PropertyForm />
  </StrictMode>,
)
