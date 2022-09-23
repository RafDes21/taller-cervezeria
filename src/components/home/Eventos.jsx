import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

import "./stylesHome/home.css";

const Eventos = () => {

  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      // opacity: 1,
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.1,
        yoyo:4
      },
    },
  };
  return (
    <motion.div
     initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }} 
    className="eventos">
      <div className="lugar-titulo">
        
          <motion.img  variants={textLugarAnimate} className="eventos-linea" src="./imgSlider/vector.png" />
        
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
    </motion.div>
  );
};

export default Eventos;
