import { CSSProperties } from "react";
import { hText, hMenu, hNav, productsH3, productsP } from "./variables";
import { wFlex, productGrid, listaGrid } from "./mixins";

export const headerStyle: CSSProperties = {
  ...hText,
};

export const headerMenuStyle = wFlex();

export const menuIconStyle: CSSProperties = {
  ...hMenu,
};

export const navStyle: CSSProperties = {
  ...hNav,
};

export const productsStyle: CSSProperties = {
  ...productGrid,
};

export const listaG: CSSProperties = {
  ...listaGrid,
};

export const productArticleStyle: CSSProperties = {
  textAlign: "center",
};

export const productDisplayStyle: CSSProperties = {
  textAlign: "left",
}; 

export const productImgStyle: CSSProperties = {
  width: "100px",
  marginBottom: "15px",
};

export const listaMargen:CSSProperties = {
  marginLeft:"0",
  width: "15%",
//  marginBottom: "15px",
};

export const buttonMargenStyle: CSSProperties = {
  marginTop: "10%",
};

export const buttonEstadoStyle: CSSProperties = {
  marginTop: "10%",
  marginRight: "10%",
  marginLeft: "35",
  marginBottom: "40%"
};

export const labelStyle: React.CSSProperties = {
  display: "inline-block",
  width: "150px",
  textAlign: "left",
};

export const espinputStyle: React.CSSProperties = {
  display: "inline-block",
  width: "170px",
  textAlign: "left",
};
export const productH3Style = productsH3;
export const productPStyle = productsP;

export const footerStyle = wFlex(true);
