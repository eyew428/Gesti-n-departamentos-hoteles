import { Link } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span>Gestion de Inmuebles</span>
        </div>
      </div>

      <div className="header-right">
        {user ? (
          <>
            <button className="btn btn-ghost btn-icon">🔔</button>
            {/* <div className="avatar">{user.username.slice(0, 2)}</div> */}
            <DropDownAvatar />
          </>
        ) : (
          <>
            <Link className="btn btn-ghost" to={"/login"}>
              Login
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

const DropDownAvatar = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleShow = () => setShowMenu(!showMenu);

  const handleLogout = () => {
    toggleShow();
    if (confirm("Seguro que quiere cerrar sesión")) logout();
  };

  return (
    <div className="dropdown">
      <button className="btn btn-ghost" onClick={toggleShow}>
        <div className="flex items-center gap-2">
          <div className="avatar avatar-sm">{user.iniciales}</div>
          <span>{showMenu ? "▲" : "▼"}</span>
        </div>
      </button>

      {showMenu === true && (
        <div className="dropdown-menu">
          <Link className="dropdown-item" to={"/perfil"} onClick={toggleShow}>
            Mi perfil
          </Link>
          <button className="dropdown-item">Configuración</button>
          <button className="dropdown-item" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};