import { useState } from "react";
import {
  listaG,
  productArticleStyle,
  productPStyle,
  buttonEstadoStyle,
} from "../styles/layout";

type Totales = {
  inicial: number;
  transito: number;
  entregado: number;
};

const GeneralGuias = () => {
  const [totales, setTotales] = useState<Totales>({
    inicial: 0,
    transito: 0,
    entregado: 0,
  });

  const obtenerResumen = () => {
    const nuevosTotales: Totales = {
      inicial: 0,
      transito: 0,
      entregado: 0,
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      try {
        const data = JSON.parse(localStorage.getItem(key) as string);

        if (!data?.estado) continue;

        if (data.estado === "Inicial") nuevosTotales.inicial++;
        if (data.estado === "En tránsito") nuevosTotales.transito++;
        if (data.estado === "Entregada") nuevosTotales.entregado++;
      } catch {
        console.warn(`Clave ignorada: ${key}`);
      }
    }

    setTotales(nuevosTotales);
  };

  return (
    <main style={listaG} role="main">
      <header>
        <h1>Estado general de las guías</h1>
        <p>Resumen del estado actual de todas las guías registradas</p>
      </header>

      <section
        aria-labelledby="panel-guias"
        role="region"
      >
        <article style={productArticleStyle}>
          <div style={productPStyle}>
            <h2 id="panel-guias">Panel de Guías por Estado</h2>

            <div aria-live="polite">
              <p>Inicial: {totales.inicial}</p>
              <p>Tránsito: {totales.transito}</p>
              <p>Entregado: {totales.entregado}</p>
            </div>
          </div>
        </article>
      </section>

      <section>
        <button
          onClick={obtenerResumen}
          style={buttonEstadoStyle}
          aria-label="Obtener resumen del estado de las guías"
        >
          Obtener resumen
        </button>
      </section>

      <footer>
        <small>Panel de seguimiento de guías</small>
      </footer>
    </main>
  );
};

export default GeneralGuias;

