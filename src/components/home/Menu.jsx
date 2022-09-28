import React from "react";
import "./stylesHome/menu.css";
import { TituloSecciones } from "../Header/Header";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import MenuDesk from "./desktop/MenuDesk";

const Menu = () => {
  const titulo = "EL MENÚ";
  const subtitulo = "Puesta a punto de sabores";
  const link = " Ver más...";

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
      className="seccion-menu"
    >
      <motion.img
        variants={textLugarAnimate}
        className="vector"
        src="./assets/vector/vect.png"
      />
      <TituloSecciones titulo={titulo} subtitulo={subtitulo} verMas={link} />
      <div className="row menu-mobile">
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
      <MenuDesk />
      <div className="Section-btnMenu">
        <Link className="nav-link" to="/menu">
          <button className="Section-button">Ver Menú Completo</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Menu;
