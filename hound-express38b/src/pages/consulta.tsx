import { useState } from "react";
import {
  productsStyle,
  productArticleStyle,
  productDisplayStyle,
  buttonMargenStyle,
} from "../styles/layout";

interface Guia {
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  peso: string;
  fecha: string;
  estado: string;
}

const Consulta = () => {
  const [numeroGuia, setNumeroGuia] = useState("");
  const [guiaEncontrada, setGuiaEncontrada] = useState<Guia | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [mostrarOtraGuia, setMostrarOtraGuia] = useState(false);

  const buscarGuia = () => {
    setMensaje("");
    setGuiaEncontrada(null);
    setMostrarOtraGuia(false);

    if (!numeroGuia.trim()) {
      setMensaje("⚠️ Ingresa un número de guía.");
      return;
    }

    const guia = localStorage.getItem(numeroGuia.trim());

    if (!guia) {
      setMensaje("❌ La guía no existe.");
      return;
    }

    const guiaParseada: Guia = JSON.parse(guia);
    setGuiaEncontrada(guiaParseada);
    setMostrarOtraGuia(true);
  };

  const otraGuia = () => {
    setNumeroGuia("");
    setGuiaEncontrada(null);
    setMensaje("");
    setMostrarOtraGuia(false);
  };

  return (
    <main style={productsStyle} role="main">

      <section aria-labelledby="consulta-guia">
        <h1>Consulta de Guía de Envío</h1>
        <p>Consulta el estado y detalles de tu envío ingresando el número de guía.</p>

        <h2 id="consulta-guia">Buscar Guía</h2>

        <label htmlFor="numeroGuia">Número de la guía</label>
        <input
          id="numeroGuia"
          type="text"
          value={numeroGuia}
          onChange={(e) => setNumeroGuia(e.target.value)}
          aria-required="true"
          aria-describedby="mensaje-estado"
        />

        <button onClick={buscarGuia} aria-label="Buscar guía">
          Buscar
        </button>

        {mensaje && (
          <div
            id="mensaje-estado"
            role="alert"
            aria-live="assertive"
            style={{ marginTop: "10px", color: "red" }}
          >
            {mensaje}
          </div>
        )}
      </section>

      <section aria-labelledby="detalle-guia">
        {guiaEncontrada && (
          <article style={productArticleStyle}>
            <div style={productDisplayStyle}>
              <h2 id="detalle-guia">Detalle de la Guía</h2>

              <p><strong>Remitente:</strong> {guiaEncontrada.remitente}</p>
              <p><strong>Destinatario:</strong> {guiaEncontrada.destinatario}</p>
              <p><strong>Origen:</strong> {guiaEncontrada.origen}</p>
              <p><strong>Destino:</strong> {guiaEncontrada.destino}</p>
              <p><strong>Peso:</strong> {guiaEncontrada.peso}</p>
              <p><strong>Fecha:</strong> {guiaEncontrada.fecha}</p>
              <p><strong>Estado:</strong> {guiaEncontrada.estado}</p>
            </div>
          </article>
        )}
      </section>

      <footer>
        {mostrarOtraGuia && (
          <button
            onClick={otraGuia}
            style={buttonMargenStyle}
            aria-label="Consultar otra guía"
          >
            Otra Guía
          </button>
        )}
      </footer>
    </main>
  );
};

export default Consulta;

