import { Link } from "react-router-dom";
import { headerStyle, headerMenuStyle, navStyle } from "../styles/layout";
import { logoblanco } from "../assets/Img";

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/alta", label: "Alta" },
  { path: "/baja", label: "Baja" },
  { path: "/cambios", label: "Cambios" },
  { path: "/consulta", label: "Consulta" },
  { path: "/lista", label: "Lista de Guías" },
  { path: "/generalGuias", label: "Estado General" },
];

const Header = () => {
  return (
    <header role="banner">
      {/* Branding */}
      <section style={headerStyle}>
        <h1>HOUND EXPRESS</h1>
      </section>

      {/* Logo + navegación */}
      <section style={headerMenuStyle}>
        <img
          src={logoblanco}
          alt="Logotipo de Hound Express - Empresa de envíos"
          width={100}
        />

        <nav
          style={{
            ...navStyle,
            display: "flex",
            gap: "1.5rem",
          }}
          aria-label="Menú principal"
          role="navigation"
        >
          {menuItems.map(({ path, label }) => (
            <Link key={path} to={path} aria-label={`Ir a ${label}`}>
              {label}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
};

export default Header;

