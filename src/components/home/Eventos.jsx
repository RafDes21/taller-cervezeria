import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import "./stylesHome/home.css";

const textEventosAnimate = {
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
    transition: { duration: 1.5 },
  },
};
const imageEventosAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Eventos = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="eventos"
    >
      <motion.div variants={textEventosAnimate} className="lugar-titulo">
        <div className="eventos-linea">
          <motion.img
            variants={imagevectorAnimate}
            src="./imgSlider/vector.png"
          />
        </div>
        <div>
          <h2 className="Section-title mx-3">EVENTOS</h2>
          <p className="Section-subtitle mx-3">Diversión a toda marcha</p>
        </div>
        <div className="eventos-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </motion.div>
      <div className="row">
        <div className="col-6 eventos1">
          <motion.div variants={textEventosAnimate} className="eventos-text">
            <h4>Karaoke</h4>
            <p>Jueves 21 horas</p>
          </motion.div>
          <motion.img
            variants={imageEventosAnimate}
            className="eventos-img1"
            src="./img/eventos/eventos1.png"
            alt="imagen-eventos"
          />
        </div>
        <div className="col-6 eventos2">
          <motion.div variants={textEventosAnimate} className="eventos-text">
            <h4>Karaoke</h4>
            <p>Jueves 21 horas</p>
          </motion.div>
          <motion.img
            variants={imageEventosAnimate}
            className="eventos-img2"
            src="./img/eventos/eventos2.png"
            alt="imagen-eventos"
          />
        </div>
      </div>
      <div className="Section-btnMenu">
        <Link to="/lugar">
          <motion.button
            variants={imageEventosAnimate}
            className="Section-button"
          >
            Arma tu evento
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Eventos;
