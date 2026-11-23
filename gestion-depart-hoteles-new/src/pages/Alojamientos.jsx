import { useState } from "react";

function Alojamientos({ onAddAlojamientos }) {

 const [forma, setForma] = useState({
    nombre: "",
    tipo: "Hotel",
    localizacion: "",
    precio: "",
 });

   function GestionarCambio(event) {

    const { nombre, value } = event.target;

    setForma({
      ...forma,
      [nombre]: value
    });
  }

  function GestionarEnvio(event) {

    event.preventDefault();

    if (!forma.nombre || !forma.localizacion || !forma.precio) {
      alert("Completa todos los campos.");
      return;
    }

    onAddAlojamientos(forma);

    setForma({
      nombre: "",
      tipo: "Hotel",
      localizacion: "",
      precio: ""
    });
  }

    
    return ( 
        <>
 <section className="form-section">
      
      <h2>Agregar alojamiento</h2>

      <form onSubmit={GestionarEnvio}>

        <input
          type="text"
          name="name"
          placeholder="Nombre del alojamiento"
          value={form.name} 
          onChange={GestionarCambio}
        />

        <select
          name="type"
          value={form.type}
          onChange={GestionarCambio}
        >
          <option value="Hotel">
            Hotel
          </option>

          <option value="Departamento">
            Departamento
          </option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Ubicación"
          value={form.location}
          onChange={GestionarCambio}
        />

        <input
          type="number"
          name="price"
          placeholder="Precio por noche"
          value={form.price}
          onChange={GestionarCambio}
        />

        <button
          type="submit"
          className="button-primary">
          Agregar alojamiento
        </button>

      </form>

    </section>
        </>
     );
}
 
export default Alojamientos;