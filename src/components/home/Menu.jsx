import React from "react";
import "./stylesHome/home.css";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container-fluid seccion-menu">
      <div className="lugar-titulo">
        
          <img className="menu-linea" src="./imgSlider/vector.png" />
        
        <div>
          <h2 className="Section-title">EL MENÚ</h2>
          <p className="Section-sub-title">Puesta a punto de sabores</p>
        </div>
        <div className="menu-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 menu-seccion1">
          <div className="menu-text1">
            <h4>
              TACOS
              <br />
              VELOCES
            </h4>
            <p>
              Sabrosa carne
              <br />
              vacuna, palta
              <br />y cebolla
            </p>
          </div>
          <img
            src="./img/menu/menu1.png"
            alt="imagen menu"
            className="menu-img menu1"
          />
        </div>
        <div className="col-12 col-md-4 menu-seccion2">
          <div className="menu-text2">
            <h4>
              BURRITOS
              <br /> MECANICOS
            </h4>
            <p>
              Sabrosa carne
              <br />
              vacuna, palta
              <br />y cebolla
            </p>
          </div>
          <img
            src="./img/menu/menu2.png"
            alt="imagen menu"
            className="menu-img menu2"
          />
        </div>
        <div className="col-0 col-md-4 menu-mostrar menu-seccion3">
          <div className="menu-text3">
            <h4>
              BURRITOS
              <br /> MECANICOS
            </h4>
            <p>
              Sabrosa carne <br />
              vacuna, palta
              <br />y cebolla
            </p>
          </div>
          <img
            src="./img/menu/menu3.png"
            alt="imagen menu"
            className="menu-img menu3"
          />
        </div>
      </div>
      <div className="Section-btnMenu">
        <Link to="/menu">
          <button className="Section-button">Ver Menú Completo</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
