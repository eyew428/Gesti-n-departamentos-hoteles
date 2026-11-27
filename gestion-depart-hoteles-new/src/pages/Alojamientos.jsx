import { useState } from "react";

function Alojamientos({ onAddAlojamientos }) {

 const [form, setForma] = useState({
    nombre: "",
    tipo: "Hotel",
    localizacion: "",
    precio: "",
 });

   function GestionarCambio(event) {

    const { nombre, value } = event.target;

    setForma({
      ...form,
      [nombre]: value
    });
  }

  function GestionarEnvio(event) {

    event.preventDefault();

    if (!form.nombre || !form.localizacion || !form.precio) {
      alert("Completa todos los campos.");
      return;
    }

    onAddAlojamientos(form);

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
      
      <h2>Buscar alojamiento</h2>

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
          Buscar alojamiento
        </button>

      </form>

    </section>
        </>
     );
}
 
export default Alojamientos;