import { useState } from "react";
import {
  productsStyle,
  productArticleStyle,
  productPStyle,
  labelStyle,
  espinputStyle,
} from "../styles/layout";

interface Guia {
  numeroGuia: string;
  remitente: string;
  destinatario: string;
  origen: string;
  destino: string;
  peso: string;
  fecha: string;
  estado: string;
}

const Alta = () => {
  const [guia, setGuia] = useState<Guia>({
    numeroGuia: "",
    remitente: "",
    destinatario: "",
    origen: "",
    destino: "",
    peso: "",
    fecha: "",
    estado: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(guia).some(c => c.trim() === "")) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const llave = guia.numeroGuia;

    if (localStorage.getItem(llave)) {
      alert("La guía ya existe");
      return;
    }

    const { numeroGuia, ...guiaGuardada } = guia;
    localStorage.setItem(llave, JSON.stringify(guiaGuardada));

    alert("Guía registrada con éxito");

    setGuia({
      numeroGuia: "",
      remitente: "",
      destinatario: "",
      origen: "",
      destino: "",
      peso: "",
      fecha: "",
      estado: "",
    });
  };

  return (
    <main style={productsStyle} role="main">
      <header>
        <h1>Alta de Guías</h1>
      </header>

      <section style={productArticleStyle} aria-labelledby="form-title">
        <h2 id="form-title" hidden>
          Formulario de Alta de Guías
        </h2>

        <form
          style={productPStyle}
          onSubmit={handleSubmit}
          aria-label="Formulario de registro de guías"
        >
          <div className="field">
            <label htmlFor="numeroGuia" style={labelStyle}>
              Número de Guía
            </label>
            <input
              id="numeroGuia"
              name="numeroGuia"
              value={guia.numeroGuia}
              required
              aria-required="true"
              onChange={e =>
                setGuia({ ...guia, numeroGuia: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="remitente" style={labelStyle}>
              Remitente
            </label>
            <input
              id="remitente"
              name="remitente"
              value={guia.remitente}
              required
              onChange={e =>
                setGuia({ ...guia, remitente: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="destinatario" style={labelStyle}>
              Destinatario
            </label>
            <input
              id="destinatario"
              name="destinatario"
              value={guia.destinatario}
              required
              onChange={e =>
                setGuia({ ...guia, destinatario: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="origen" style={labelStyle}>
              Origen
            </label>
            <input
              id="origen"
              name="origen"
              value={guia.origen}
              required
              onChange={e =>
                setGuia({ ...guia, origen: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="destino" style={labelStyle}>
              Destino
            </label>
            <input
              id="destino"
              name="destino"
              value={guia.destino}
              required
              onChange={e =>
                setGuia({ ...guia, destino: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="peso" style={labelStyle}>
              Peso
            </label>
            <input
              id="peso"
              name="peso"
              type="number"
              value={guia.peso}
              required
              onChange={e =>
                setGuia({ ...guia, peso: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="fecha" style={labelStyle}>
              Fecha
            </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              style={espinputStyle}
              value={guia.fecha}
              required
              onChange={e =>
                setGuia({ ...guia, fecha: e.target.value })
              }
            />
          </div>

          <div className="field">
            <label htmlFor="estado" style={labelStyle}>
              Estado
            </label>
            <select
              id="estado"
              name="estado"
              style={espinputStyle}
              value={guia.estado}
              required
              aria-describedby="estado-ayuda"
              onChange={e =>
                setGuia({ ...guia, estado: e.target.value })
              }
            >
              <option value="">-Seleccione-</option>
              <option value="Inicial">Inicial</option>
              <option value="En tránsito">En tránsito</option>
              <option value="Entregada">Entregada</option>
            </select>
            <small id="estado-ayuda">
              Estado actual guía 
            </small>
          </div>

          <div className="field">
            <button type="submit" aria-label="Guardar guía">
              Guardar Guía
            </button>
          </div>
        </form>
      </section>

      <footer aria-hidden="true"></footer>
    </main>
  );
};

export default Alta;



