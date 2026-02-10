// src/router.tsx
//import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import App          from "./App";
import Home         from "./pages/Home";
import Alta         from "./pages/alta";
import Baja         from "./pages/baja";
import Cambios      from "./pages/cambios";
import Consulta     from "./pages/consulta";
import ListaGuias   from "./pages/lista";
import GeneralGuias from "./pages/generalGuias";


/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "alta", element: <Alta /> },
      { path: "baja", element: <Baja /> },
      { path: "cambios", element: <Cambios /> },
      { path: "consulta", element: <Consulta/> },
      { path: "lista", element: <ListaGuias/> },
      { path: "generalGuias", element: <GeneralGuias/> },
    ],
  },
]);

export default router;
*/


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "alta", element: <Alta /> },
      { path: "baja", element: <Baja /> },
      { path: "cambios", element: <Cambios /> },
      { path: "consulta", element: <Consulta /> },
      { path: "lista", element: <ListaGuias /> },
      { path: "generalGuias", element: <GeneralGuias /> },
    ],
  },
]);

export default router;