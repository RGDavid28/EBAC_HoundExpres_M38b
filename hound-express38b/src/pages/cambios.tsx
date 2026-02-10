import { useState } from "react";
import {
  productsStyle,
  productArticleStyle,
  productPStyle,
  labelStyle,
  buttonMargenStyle,
} from "../styles/layout";

type Guia = {
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  peso: string;
  fecha: string;
  estado: string;
};

const guiaVacia: Guia = {
  remitente: "",
  destinatario: "",
  origen: "",
  destino: "",
  peso: "",
  fecha: "",
  estado: "",
};

const Cambios = () => {
  const [numeroGuia, setNumeroGuia] = useState("");
  const [guiaActual, setGuiaActual] = useState<string | null>(null);
  const [guia, setGuia] = useState<Guia>(guiaVacia);
  const [mensaje, setMensaje] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const buscarGuia = () => {
    setMensaje("");

    if (!numeroGuia.trim()) {
      setMensaje("⚠️ Ingrese un número de guía.");
      return;
    }

    const datos = localStorage.getItem(numeroGuia);

    if (!datos) {
      setMostrarFormulario(false);
      setMensaje("❌ La guía no existe.");
      return;
    }

    setGuiaActual(numeroGuia);
    setGuia(JSON.parse(datos));
    setMostrarFormulario(true);
  };

  const guardarCambios = () => {
    const todosConValor = Object.values(guia).every(valor => valor !== "");

    if (!todosConValor) {
      setMensaje("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (guiaActual) {
      localStorage.setItem(guiaActual, JSON.stringify(guia));
      setMostrarFormulario(false);
      setMensaje("✅ Cambios guardados exitosamente.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setGuia({ ...guia, [name]: value });
  };

  return (
    <main style={productsStyle} role="main">
      
      <section aria-labelledby="busqueda-guia">
        <h1>Modificación de guía</h1>
        <h2 id="busqueda-guia">Buscar guía</h2>

        <label htmlFor="numeroGuia">Número de Guía:</label>
        <input
          id="numeroGuia"
          type="text"
          value={numeroGuia}
          onChange={(e) => setNumeroGuia(e.target.value)}
          aria-label="Número de guía"
          required
        />

        <button onClick={buscarGuia} aria-label="Buscar guía">
          Buscar
        </button>

        {mensaje && (
          <p role="alert" aria-live="assertive">
            {mensaje}
          </p>
        )}
      </section>

      <article style={productArticleStyle} aria-hidden={!mostrarFormulario}>
        {mostrarFormulario && (
          <>
            <h3>Detalle de la Guía</h3>

            <section style={productPStyle}>
              {[
                { label: "Remitente", name: "remitente", type: "text" },
                { label: "Destinatario", name: "destinatario", type: "text" },
                { label: "Origen", name: "origen", type: "text" },
                { label: "Destino", name: "destino", type: "text" },
                { label: "Peso (kg)", name: "peso", type: "number" },
                { label: "Fecha", name: "fecha", type: "date" },
              ].map(({ label, name, type }) => (
                <div key={name}>
                  <label htmlFor={name} style={labelStyle}>
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    value={guia[name as keyof Guia]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div>
                <label htmlFor="estado" style={labelStyle}>
                  Estado
                </label>
                <select
                  id="estado"
                  name="estado"
                  value={guia.estado}
                  onChange={handleChange}
                  required
                  aria-label="Estado del envío"
                >
                  <option value="">-Seleccione-</option>
                  <option value="Inicial">Inicial</option>
                  <option value="En tránsito">En tránsito</option>
                  <option value="Entregada">Entregada</option>
                </select>
              </div>
            </section>
          </>
        )}
      </article>

      <footer>
        {mostrarFormulario && (
          <button
            onClick={guardarCambios}
            style={buttonMargenStyle}
            aria-label="Guardar cambios de la guía"
          >
            Guardar Cambios
          </button>
        )}
      </footer>
    </main>
  );
};

export default Cambios;
