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
      <div className="menu-mobile">
        <div className="row mx-0 menu-fila1">
          <div className="col-4 menu-texto">
            <div className="menu-text1">
              <h4>LA MONSTER TALLER</h4>
              <p>
                Doble carne de res, queso amarillo y manchego, piña, tocino y
                bbq.
              </p>
            </div>
          </div>
          <div className="col-8 menu-imagen">
            <img
              src="./img/menu/menu1.png"
              alt="imagen menu"
              className="menu1"
            />
          </div>
        </div>
        <div className="row mx-0 menu-fila2">
          <div className="col-8 menu-imagen">
            <img
              src="./img/menu/menu2.png"
              alt="imagen-menu"
              className="menu2"
            />
          </div>
          <div className="col-4">
            <div className="menu-text2">
              <h4>LAS PETRÓLEO</h4>
              <p>
                Deliciosas alitas bañadas en nuestra salsa especial “el taller”.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="desktopMenu">
        <MenuDesk />
      </div>
      <div className="Section-btnMenu boton-menu">
        <Link className="nav-link" to="/menu">
          <button className="Section-button">Ver Menú Completo</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Menu;
