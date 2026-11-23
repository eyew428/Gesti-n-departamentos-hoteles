import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const CrearCliente = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [passwordV, setPasswordV] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { createCliente } = useAuth();

  const onSubmit = async (e) => {
    setIsError(false);
    e.preventDefault();

    // Validar las contraseñas
    if (
      password.trim() == "" ||
      passwordV.trim() == "" ||
      password !== passwordV
    ) {
      setMessage("Contraseñas diferentes");
      setIsError(true);
      return;
    }

    // Enviar la petición y gestionar la respuesta
    const res = await createCliente({
      nombre: nombre,
      telefono: tel,
      email: email,
      password: password,
    });
    const data = await res.json();

    if (!res.ok) {
      setIsError(true);
      setMessage(data.message);
      return;
    }

    setMessage("Cliente Creado");
  };

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="heading-2">Crear Cliente</h2>
      </div>

      <div className="card">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="input"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="input"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="input"
              id="password_validation"
              placeholder="Repetir contraseña"
              value={passwordV}
              onChange={(e) => setPasswordV(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <div></div>
            <button className="btn btn-primary">Crear</button>
          </div>
        </form>
      </div>

      {message !== "" && (
        <div className={`alert alert-${isError ? "danger" : "success"}`}>
          {message}
        </div>
      )}
    </section>
  );
};

export default CrearCliente;