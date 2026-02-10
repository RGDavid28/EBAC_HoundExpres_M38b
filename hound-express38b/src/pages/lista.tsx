/*import { useEffect, useState } from "react";
import {
  productArticleStyle,
  listaG,
} from "../styles/layout";

interface Guia {
  llave: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  peso: string;
  fecha: string;
  estado: string;
}

const FILAS_POR_PAGINA = 3;

const Lista = () => {
  const [guias, setGuias] = useState<Guia[]>([]);
  const [pagina, setPagina] = useState(1);

  /* ==============================
     CARGAR GUÍAS DESDE LOCALSTORAGE
  ================================*/
/*
  useEffect(() => {
    const datos: Guia[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      const data = JSON.parse(localStorage.getItem(key) || "null");

      if (data) {
        datos.push({
          ...data,
          llave: key,
        });
      }
    }

    datos.sort((a, b) => a.llave.localeCompare(b.llave));
    setGuias(datos);
  }, []);

  /* ==============================
     PAGINACIÓN
  ================================*/
/* const totalPaginas = Math.ceil(guias.length / FILAS_POR_PAGINA);
  const inicio = (pagina - 1) * FILAS_POR_PAGINA;
  const guiasPagina = guias.slice(inicio, inicio + FILAS_POR_PAGINA);

  return (
    <main style={listaG}>
      <p> </p>
      <article style={productArticleStyle}>

        <p>Lista de Guías</p>

        <h3>Detalle de las Guías</h3>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{border:"1px solid #ccc", padding:"6px", textAlign:"left"}}>
              <th>ID Guía</th>
              <th>Remitente</th>
              <th>Destinatario</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Peso</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {guiasPagina.map((guia) => (
              <tr key={guia.llave} style={{border:"1px solid #ccc", padding:"6px", textAlign:"left"}}>
                <td>{guia.llave}</td>
                <td>{guia.remitente}</td>
                <td>{guia.destinatario}</td>
                <td>{guia.origen}</td>
                <td>{guia.destino}</td>
                <td>{guia.peso}</td>
                <td>{guia.fecha}</td>
                <td>{guia.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* PAGINACIÓN *//*} */
/*        <div style={{ marginTop: "10px" }}>
          <button
            onClick={() => setPagina((p) => Math.max(p - 1, 1))}
            disabled={pagina === 1}
          >
            Anterior
          </button>

          <span style={{ margin: "0 10px" }}>
            Página {pagina} de {totalPaginas}
          </span>

          <button
            onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
            disabled={pagina === totalPaginas}
          >
            Siguiente
          </button>
        </div>
      </article>
      <p> </p>      
    </main>
  );
};

export default Lista; */

import { useEffect, useState } from "react";
import { productArticleStyle, listaG } from "../styles/layout";

interface Guia {
  llave: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  peso: string;
  fecha: string;
  estado: string;
}

const FILAS_POR_PAGINA = 3;

const Lista = () => {
  const [guias, setGuias] = useState<Guia[]>([]);
  const [pagina, setPagina] = useState(1);

  /* ==============================
     CARGAR GUÍAS DESDE LOCALSTORAGE
  ================================*/
  useEffect(() => {
    const datos: Guia[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key) continue;

      const data = JSON.parse(localStorage.getItem(key) || "null");

      if (data) {
        datos.push({ ...data, llave: key });
      }
    }

    datos.sort((a, b) => a.llave.localeCompare(b.llave));
    setGuias(datos);
  }, []);

  /* ==============================
     PAGINACIÓN
  ================================*/
  const totalPaginas = Math.ceil(guias.length / FILAS_POR_PAGINA);
  const inicio = (pagina - 1) * FILAS_POR_PAGINA;
  const guiasPagina = guias.slice(inicio, inicio + FILAS_POR_PAGINA);

  return (
    <main style={listaG} role="main">
      <header>
        <h1>Listado de Guías</h1>
        <p>Consulta detallada de las guías de envío registradas</p>
      </header>

      <section aria-labelledby="titulo-tabla">
        <article style={productArticleStyle}>
          <h2 id="titulo-tabla">Detalle de las Guías</h2>

          <table
            style={{ width: "100%", borderCollapse: "collapse" }}
            role="table"
            aria-label="Tabla de guías de envío"
          >
            <thead>
              <tr >
                <th scope="col">ID Guía</th>
                <th scope="col">Remitente</th>
                <th scope="col">Destinatario</th>
                <th scope="col">Origen</th>
                <th scope="col">Destino</th>
                <th scope="col">Peso</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>

            <tbody>
              {guiasPagina.map((guia) => (
                <tr key={guia.llave} style={{border:"1px solid #ccc", padding:"6px", textAlign:"left"}}>
                  <td>{guia.llave}</td>
                  <td>{guia.remitente}</td>
                  <td>{guia.destinatario}</td>
                  <td>{guia.origen}</td>
                  <td>{guia.destino}</td>
                  <td>{guia.peso}</td>
                  <td>{guia.fecha}</td>
                  <td>{guia.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINACIÓN */}
          <nav
            aria-label="Paginación de guías"
            style={{ marginTop: "10px" }}
          >
            <button
              onClick={() => setPagina((p) => Math.max(p - 1, 1))}
              disabled={pagina === 1}
              aria-label="Página anterior"
            >
              Anterior
            </button>

            <span aria-live="polite" style={{ margin: "0 10px" }}>
              Página {pagina} de {totalPaginas}
            </span>

            <button
              onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
              disabled={pagina === totalPaginas}
              aria-label="Página siguiente"
            >
              Siguiente
            </button>
          </nav>
        </article>
      </section>

      <footer>
        <p>&copy; 2026 Sistema de Envíos</p>
      </footer>
    </main>
  );
};

export default Lista;