import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../bin/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    api("/cliente/me")
      .then((res) => {
        if (!res.ok) {
          setUser(null);
          setLogged(false);
          return;
        }

        return res.json();
      })
      .then((user) => {
        if (user) {
          const iniciales = user.nombre
            .trim()
            .split(/\s+/)
            .map((parte) => parte[0].toUpperCase())
            .join("");

          setUser({
            ...user,
            iniciales,
          });
          setLogged(true);
        }
      });
  };

  const login = async (username, password) => {
    return await api("/cliente/login", {
      method: "POST",
      body: JSON.stringify({
        email: username,
        contraseña: password,
      }),
    });
  };

  const logout = () => {
    api("/cliente/logout", {
      method: "POST",
    });
    setLogged(false);
    setUser(null);
  };

  const createCliente = async ({ nombre, telefono, email, password, rol }) => {
    return await api("/cliente", {
      method: "POST",
      body: JSON.stringify({
        nombre,
        tel: telefono,
        email,
        password,
        rol: "Guest",
      }),
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logged,
        check: checkAuth,
        login,
        logout,
        createCliente,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe estar dentro de AuthProvider");

  return context;
};