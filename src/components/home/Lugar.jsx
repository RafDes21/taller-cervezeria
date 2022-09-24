import React from "react";
import { Link } from "react-router-dom";
import "./stylesHome/home.css";

const Lugar = () => {
  return (
    <div className="px-0 lugar">
      <div className="lugar-titulo">
        <div>
          <h2 className="Section-title">EL LUGAR</h2>
          <p className="Section-sub-title">Unos boxes muy chingones</p>
        </div>
        <div className="lugar-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-12 col-md-4">
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
        <div className="col-6 col-md-4">
          <img
            src="./img/lugar/lugar2b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src="./img/lugar/lugar3b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
      </div>
      <div className="Section-btn">
        <Link to="/lugar">
          <button className="Section-button">Ver Ubicación</button>
        </Link>
      </div>
    </div>
  );
};

export default Lugar;
