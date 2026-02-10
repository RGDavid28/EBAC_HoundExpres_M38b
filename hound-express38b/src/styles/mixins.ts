//import { CSSProperties } from "react";
import type { CSSProperties } from "react";

export const wFlex = (footColor?: boolean): CSSProperties => ({
  width: "100%",
  padding: "20px 50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  backgroundColor: footColor ? "#7fffd4" : "transparent",
});

export const productGrid: CSSProperties = {
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, .5fr))",
  columnGap: "10px",
  backgroundColor: "#0f8ee2",
};

export const listaGrid: CSSProperties = {
  width: "100%",
  margin: "0 auto",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "20% 50% 25%" ,
  columnGap: "10px",
  overflowX: 'auto', // Permite scroll si el contenido supera el ancho
  backgroundColor: "#0f8ee2",
};



export const responsive1024 = {
  headerText: {
    textAlign: "center",
    fontSize: "10px",
  } as CSSProperties,

  wFlex: (footColor?: boolean): CSSProperties => ({
    width: "100%",
    padding: "10px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: footColor ? "#7fffd4" : "transparent",
  }),
};
