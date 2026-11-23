import { Link, useLocation, useParams } from "react-router";
import { useAuth } from "../context/AuthContext";

export const SideBar = () => {
  const { user, logged } = useAuth();
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>TFS</span>
      </div>

      <nav className="nav">
        <div className="nav-label">Principal</div>

        <Link
          className={`nav-item${location === "" ? " active" : ""}`}
          to={"/"}
        >
          Inicio
        </Link>

        {logged && (
          <>
            <Link
              className={`nav-item${location === "perfil" ? " active" : ""}`}
              to={"/perfil"}
            >
              Perfil
            </Link>
            <Link
              className={`nav-item${location === "miscompras" ? " active" : ""}`}
            >
              Mis compras
            </Link>
          </>
        )}

        {user && user.rol === "Admin" && (
          <Link
            className={`nav-item${location === "compras" ? " active" : ""}`}
          >
            Compras
          </Link>
        )}

        {user && user.rol === "Admin" && (
          <>
            <div className="nav-label">Administración</div>
            <Link
              className={`nav-item${location === "productos" ? " active" : ""}`}
              to={"/productos"}
            >
              Productos
            </Link>
            <Link
              className={`nav-item${location === "usuarios" ? " active" : ""}`}
              to={"/usuarios"}
            >
              Usuarios
            </Link>
          </>
        )}
      </nav>

      <div className="sidebar-footer">
        {user && (
          <Link className="nav-item" to={"/perfil"}>
            <span className="avatar avatar-sm">{user.iniciales}</span> Mi
            cuenta{" "}
          </Link>
        )}
      </div>
    </aside>
  );
};