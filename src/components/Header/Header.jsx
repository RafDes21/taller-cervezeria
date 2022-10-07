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
export const TituloSecciones = ({ titulo, subtitulo, verMas, verMasOut,href, to }) => {
  return (
    <div className="lugar-titulo">
      <div>
        <h2 className="lugar-title">{titulo}</h2>
        <p className="sub-title">{subtitulo}</p>
      </div>
      <div className="lugar-link">
        <a href={href} className="nav-link link" target="_blank" rel="noopener noreferrer">{verMasOut}</a>
        <Link className="nav-link link" to={to} target="_blank" rel="noopener noreferrer">
          {verMas}
        </Link>
      </div>
    </div>
  );
};
