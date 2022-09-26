import React from "react";
import "./header.css";

 export const Header = ({img}) => {
  return (
    <div className="header-img">
      <img src={img} alt="imagenFondo"/>
    </div>
  );
};

export const Texto = ({texto1, texto2}) => {
  return (
    <div className="header-textos">
      <h1>{texto1}</h1>
      <h3>{texto2}</h3>
    </div>
  );
}


