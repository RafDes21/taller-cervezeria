import React from "react";
import "./stylesHome/home.css";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

const textLugarAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
const imagevectorAnimate = {
  offscreen: { y: 400, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {duration: 1.5 },
  },
};
const imageLugarAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Menu = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="container-fluid seccion-menu"
    >
      <motion.div variants={textLugarAnimate} className="lugar-titulo">
        <div className="menu-linea">
          <motion.img variants={imagevectorAnimate} src="./imgSlider/vector.png"/>
        </div>
        <div>
          <h2 className="Section-title">EL MENÚ</h2>
          <p className="Section-subtitle">Puesta a punto de sabores</p>
        </div>
        <div className="menu-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </motion.div>
      <motion.div variants={imageLugarAnimate} className="row">
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
      </motion.div>
      <div className="Section-btnMenu">
        <Link to="/lugar">
          <motion.button
            variants={imageLugarAnimate}
            className="Section-button"
            
          >
            Ver Menú Completo
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Menu;


