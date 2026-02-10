import { useState } from "react";
import {
  productsStyle,
  productDisplayStyle,
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

const Baja = () => {
  const [numeroGuia, setNumeroGuia] = useState("");
  const [guiaEncontrada, setGuiaEncontrada] = useState<Guia | null>(null);
  const [llaveActual, setLlaveActual] = useState("");
  const [mensaje, setMensaje] = useState("");

  const buscarGuia = () => {
    setMensaje("");
    setGuiaEncontrada(null);

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
    setLlaveActual(numeroGuia.trim());
  };

  const eliminarGuia = () => {
    if (!guiaEncontrada || !llaveActual) return;

    localStorage.removeItem(llaveActual);
    setGuiaEncontrada(null);
    setLlaveActual("");
    setMensaje("✅ La guía fue eliminada correctamente.");
  };

  return (
    <main style={productsStyle} role="main">
      
      <section aria-labelledby="buscar-guia">
        <h2 id="buscar-guia">Buscar guía</h2>

        <label htmlFor="numeroGuia">
          Número de la guía:
        </label>

        <input
          id="numeroGuia"
          type="text"
          value={numeroGuia}
          onChange={(e) => setNumeroGuia(e.target.value)}
          aria-required="true"
          aria-describedby="mensaje-estado"
        />

        <button
          onClick={buscarGuia}
          aria-label="Buscar guía por número"
        >
          Buscar
        </button>

        {mensaje && (
          <p id="mensaje-estado" role="alert">
            {mensaje}
          </p>
        )}
      </section>

      {guiaEncontrada && (
        <section aria-labelledby="detalle-guia">
          <article style={productDisplayStyle}>
            <h2 id="detalle-guia">Detalle de la Guía</h2>

            <p><strong>Remitente:</strong> {guiaEncontrada.remitente}</p>
            <p><strong>Destinatario:</strong> {guiaEncontrada.destinatario}</p>
            <p><strong>Origen:</strong> {guiaEncontrada.origen}</p>
            <p><strong>Destino:</strong> {guiaEncontrada.destino}</p>
            <p><strong>Peso:</strong> {guiaEncontrada.peso}</p>
            <p><strong>Fecha:</strong> {guiaEncontrada.fecha}</p>
            <p><strong>Estado:</strong> {guiaEncontrada.estado}</p>

            <button
              onClick={eliminarGuia}
              aria-label="Eliminar guía encontrada"
            >
              Eliminar Guía
            </button>
          </article>
        </section>
      )}

      <footer>
        <p>Sistema de gestión de envíos</p>
      </footer>

    </main>
  );
};

export default Baja;