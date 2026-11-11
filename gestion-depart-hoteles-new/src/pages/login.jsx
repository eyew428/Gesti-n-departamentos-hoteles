import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const [userName, setUsername] = useState("fran@example.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const { login, user, check } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const onSubmit = async () => {
    setError(false);
    const response = await login(userName, password);
    if (!response.ok) {
      setError(true);
      return;
    }

    const data = await response.json();
    setMessage(data.message);
    setError(false);
    check();

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="main-layout">
      <main className="content">
        <div className="content-inner">
          <section className="section login">
            <div className="section-header">
              <h2 className="heading-2">Login</h2>
            </div>

            <div className="card" style={{ maxWidth: "500px" }}>
              <div>
                <div className="form-group">
                  <label className="form-label">Nombre de usuario</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="flex justify-between"
                style={{ marginTop: "24px" }}
              >
                <button className="btn btn-outline">Cancelar</button>
                <button className="btn btn-primary" onClick={onSubmit}>
                  Entrar
                </button>
              </div>
            </div>
          </section>

          <section className="section">
            {!error && message && (
              <div className="alert alert-success">
                <strong>✓</strong>
                <div>
                  <strong>Login exitoso</strong>
                  <p className="text-sm">{message}</p>
                </div>
              </div>
            )}

            {error && (
              <div className="alert alert-danger">
                <strong>×</strong>
                <div>
                  <strong>Error</strong>
                  <p className="text-sm">{message}</p>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;