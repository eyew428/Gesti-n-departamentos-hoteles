import { useState } from 'react';
import './styles/App.css';
import PropertyForm from './components/PropertyForm';

function App() {
  const [] = useState();

  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Hotel Central",
      type: "Hotel",
      location: "Montevideo",
      price: 2500
    },
    {
      id: 2,
      name: "Departamento Centro",
      type: "Departamento",
      location: "Montevideo",
      price: 1800
    },
    {
      id: 3,
      name: "Apart Hotel Rivera",
      type: "Hotel",
      location: "Rivera",
      price: 2200
    }
  ]);

  const [search, setSearch] = useState("");

  function addProperty(property) {

    const newProperty = {
      ...property,
      id: Date.now()
    };

    setProperties([...properties, newProperty]);
  }


  return (
    
    <>

  <body className='fondo'>

   <h1 className='titulo'>Gestión de Departamentos y hoteles del Uruguay</h1>

    <nav>
      <a href="inicio">Inicio</a>
      
      <a href="alojamientos">
        Alojamientos
      </a>
      
      <a href="reservas">
        Reservas
      </a>

    </nav>

    <p className="description">
          Administra hoteles y departamentos desde un solo lugar.
        </p>

        <div className="search-container">

          <input
            type="text"
            placeholder="Buscar alojamiento..."
            value={search}

            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

  </body>

  <PropertyForm onAddProperty={addProperty} />

<section className="properties">

          <h2>Alojamientos registrados</h2>

        </section>

    </>

  );
}

export default App;
