import './styles/App.css';
import NotFound from './pages/Not found';
import { Route, Routes } from 'react-router';
import MainLayout from './layout/MainLayout';
import Login from './pages/login';
import Alojamientos from './pages/Alojamientos';
import CrearCliente from './pages/CrearUsuario';

function App() {

return (
  <Routes>
    <Route path='login' element={<Login />} />
    
      <Route element={<MainLayout />} >
      <Route path="/crearCliente" element={<CrearCliente />} />
      <Route path='/Alojamientos' element={<Alojamientos />} />

        <Route path="*" element={<NotFound />} />
      </Route>
  </Routes>
)
}

export default App;
