import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = ({ img }) => {
  return (
    <div className="header-img">
      <img src={img} alt="imagenFondo" />
    </div>
  );
};

export const Texto = ({ texto1, texto2 }) => {
  return (
    <div className="header-textos">
      <h1>{texto1}</h1>
      <h3>{texto2}</h3>
    </div>
  );
};
export const TituloSecciones = ({ titulo, subtitulo, verMas }) => {
  return (
    <div className="lugar-titulo">
      <div>
        <h2 className="lugar-title">{titulo}</h2>
        <p className="sub-title">{subtitulo}</p>
      </div>
      <div className="lugar-link">
        <Link className="nav-link link" to="/lugar">
          {verMas}
        </Link>
      </div>
    </div>
  );
};
