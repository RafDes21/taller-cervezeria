import React from "react";
import { Link } from "react-router-dom";

import "./stylesHome/home.css";

const Eventos = () => {
  return (
    <div className="eventos">
      <div className="lugar-titulo">
        
          <img className="eventos-linea" src="./imgSlider/vector.png" />
        
        <div>
          <h2 className="Section-title">EVENTOS</h2>
          <p className="Section-sub-title">Diversión a toda marcha</p>
        </div>
        <div className="eventos-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-6 eventos1">
          <div className="eventos-text">
            <h4>Karaoke</h4>
            <p>Jueves 21 horas</p>
          </div>
          <img
            className="eventos-img1"
            src="./img/eventos/eventos1.png"
            alt="imagen-eventos"
          />
        </div>
        <div className="col-6 eventos2">
          <div className="eventos-text">
            <h4>Karaoke</h4>
            <p>Jueves 21 horas</p>
          </div>
          <img
            className="eventos-img2"
            src="./img/eventos/eventos2.png"
            alt="imagen-eventos"
          />
        </div>
      </div>
      <div className="Section-btnMenu">
        <Link to="/lugar">
          <button className="Section-button">Arma tu evento</button>
        </Link>
      </div>
    </div>
  );
};

export default Eventos;
