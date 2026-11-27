import { Link, Outlet } from "react-router";
import { Header } from "./Header.jsx";
import { SideBar } from "./SideBar.jsx";
import "../styles/MainLayout.css"


const MainLayout = () => {
  return (
    <div className="main-layout">
      <SideBar />
      

      <main className="content">
        <Header />

        <div className="content-inner">
          <Outlet />
        </div>

        <footer className="footer">
          <span>© 2026 ACME. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link to={"#"}>Privacidad</Link>
            <Link to={"#"}>Términos</Link>
            <Link to={"#"}>Ayuda</Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;