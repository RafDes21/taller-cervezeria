import React from "react";
import "./stylesHome/home.css";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

const Menu = () => {
  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.1,
        yoyo: 4,
      },
    },
  };
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="container-fluid seccion-menu"
    >
      <div className="lugar-titulo">
        <motion.img
          variants={textLugarAnimate}
          className="menu-linea"
          src="./imgSlider/vector.png"
        />

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
    </motion.div>
  );
};

export default Menu;
