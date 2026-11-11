import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'
import PropertyForm from './components/PropertyForm.jsx'
import PropertyCard from './components/PropertyCard.jsx'
import Login from './pages/login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </AuthProvider>
    <PropertyForm />
    <PropertyCard />
  </StrictMode>
)
