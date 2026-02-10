import { footerStyle } from "../styles/layout";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <section>
        <small>
          © 2024 DRG Company LLC.
          <br />
          Todos los derechos reservados.
        </small>
      </section>

      <section>
        <p>Llame al área comercial al teléfono: (52) 55427124</p>
        <a href="#">Chatea en este momento</a>
      </section>
    </footer>
  );
};

export default Footer;
