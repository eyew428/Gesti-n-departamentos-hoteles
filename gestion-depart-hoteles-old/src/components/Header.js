import React from "react";

function Header() {

  return (
    <header className="header">

      <div className="header-content">

        <h1>GestionInmueble</h1>

        <nav>

          <a href="inicio">Inicio</a>

          <a href="alojamientos">
            Alojamientos
          </a>

          <a href="reservas">
            Reservas
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Header;