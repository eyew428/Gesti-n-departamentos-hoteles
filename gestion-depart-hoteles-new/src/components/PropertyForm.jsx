import { useState } from "react";
function PropertyForm({ onAddProperty }) {

  const [form, setForm] = useState({
    name: "",
    type: "Hotel",
    location: "",
    price: ""
  });

  function GestionarCambio(event) {

    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  function GestionarEnvio(event) {

    event.preventDefault();

    if (!form.name || !form.location || !form.price) {
      alert("Completa todos los campos.");
      return;
    }

    onAddProperty(form);

    setForm({
      name: "",
      type: "Hotel",
      location: "",
      price: ""
    });
  }

  return (
    <section className="form-section">
      
      <h2>Agregar alojamiento new</h2>

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
  );
}

export default PropertyForm;