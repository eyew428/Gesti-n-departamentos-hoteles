import React, { useState } from "react";

import Header from "./components/Header";
import PropertyCard from "./components/PropertyCard";
import PropertyForm from "./components/PropertyForm";

function Home() {

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

  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Header />

      <main className="container">

        <h1>Gestión de alojamientos</h1>

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

        <PropertyForm onAddProperty={addProperty} />

        <section className="properties">

          <h2>Alojamientos registrados</h2>

          <div className="property-grid">

            {filteredProperties.map((property) => (

              <PropertyCard
                key={property.id}
                property={property}
              />

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;