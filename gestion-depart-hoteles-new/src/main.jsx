import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'
import Login from './pages/login.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Header } from './layout/Header.jsx'
import MainLayout from './layout/MainLayout.jsx'
import { SideBar } from './layout/SideBar.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <App />
    <Login />
    </BrowserRouter>
    <Header />
    <MainLayout />
    <SideBar />
    </AuthProvider>
  </StrictMode>
)
