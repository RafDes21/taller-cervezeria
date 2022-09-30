import React from "react";
import { Link } from "react-router-dom";
import { TituloSecciones } from "../Header/Header";
import "./homeCss/lugar.css";

const ElLugar = () => {
  const titulo = "EL LUGAR";
  const subtitulo = "Unos boxes muy chingones";
  const link = " Ver más...";
  return (
    <div className="lugar">
      <TituloSecciones titulo={titulo} subtitulo={subtitulo} verMas={link} />
      <div className="row mx-0">
        <div className="col-12 col-md-4 px-0">
          <img
            src="./img/lugar/lugar1.png"
            alt="imagen-eltaller"
            className="Lugar-img mostrar"
          />
          <img
            src="./img/lugar/lugar1b.png"
            alt="imagen-eltaller"
            className="Lugar-img oculto"
          />
        </div>
        <div className="col-6 col-md-4 px-0">
          <img
            src="./img/lugar/lugar2b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
        <div className="col-6 col-md-4 px-0">
          <img
            src="./img/lugar/lugar3b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
      </div>
      <div className="Section-btn">
        <Link className="nav-link" to="/lugar">
          <button className="Section-button">Ver Ubicación</button>
        </Link>
      </div>
    </div>
  );
};

export default ElLugar;
