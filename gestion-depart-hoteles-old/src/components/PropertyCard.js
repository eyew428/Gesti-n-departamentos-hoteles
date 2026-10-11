import React from "react";

// Recibimos la propiedad mediante props.
function PropertyCard({ property }) {

  return (
    <article className="property-card">

      {/* Nombre del alojamiento */}
      <h3>{property.name}</h3>

      {/* Tipo de alojamiento */}
      <p className="property-type">
        {property.type}
      </p>

      {/* Ubicación */}
      <p>
        📍 {property.location}
      </p>

      {/* Precio */}
      <p className="price">
        ${property.price} / noche
      </p>

      {/* Botones de acciones */}
      <div className="card-actions">

        <button className="button-primary">
          Editar
        </button>

        <button className="button-danger">
          Eliminar
        </button>

      </div>

    </article>
  );
}

// Exportamos el componente.
export default PropertyCard;