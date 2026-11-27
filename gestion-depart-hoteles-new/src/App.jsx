import './styles/Alojamientos.css';
import NotFound from './pages/Not found';
import { Route, Routes } from 'react-router';
import MainLayout from './layout/MainLayout';
import Login from './pages/login';
import Alojamientos from './pages/Alojamientos';
import CrearCliente from './pages/CrearUsuario';
import { SideBar } from './layout/SideBar';
import './styles/login.css';
import Home from './pages/Home';

function App() {

return (
  <Routes>
    <Route path='login' element={<Login />} />
    
      <Route element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path='SideBar' element={<SideBar />} />
      <Route path="crearCliente" element={<CrearCliente />} />
      <Route path='Alojamientos' element={<Alojamientos />} />

        <Route path="*" element={<NotFound />} />
      </Route>
  </Routes>
)
}

export default App;
