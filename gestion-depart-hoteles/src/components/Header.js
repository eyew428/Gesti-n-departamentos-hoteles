// Importamos React.
import React from "react";

// Componente Header.
function Header() {

  return (
    <header className="header">

      <div className="header-content">

        {/* Nombre de la aplicación */}
        <h2>StayManager</h2>

        {/* Menú de navegación */}
        <nav>

          <a href="#inicio">Inicio</a>

          <a href="#alojamientos">
            Alojamientos
          </a>

          <a href="#reservas">
            Reservas
          </a>

        </nav>

      </div>

    </header>
  );
}

// Exportamos el componente.
export default Header;