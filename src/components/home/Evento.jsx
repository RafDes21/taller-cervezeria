import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";

import "./homeCss/eventos.css";
import { TituloSecciones } from "../Header/Header";
import EventosMobile from "./desktop/eventos/EventosMobile";
import EventosDesktop from "./desktop/eventos/EventosDesktop";

const Eventos = () => {
  const titulo = "EVENTOS ";
  const link = " Ver más...";
  const subtitulo = "Diversión a toda marcha";

  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      // opacity: 1,
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.2,
        yoyo: 4,
      },
    },
  };
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="eventos"
    >
      <motion.img
        variants={textLugarAnimate}
        className="eventos-linea"
        src="./assets/vector/vect.png"
      />
      <motion.img
        variants={textLugarAnimate}
        className="vectEventos"
        src="./assets/vector/vecEventos.png"
      />
      <TituloSecciones titulo={titulo} subtitulo={subtitulo} verMas={link} to='/eventos' />
      <div className="mobile">
        <EventosMobile />
      </div>
      <div className="desktop">
        <EventosDesktop/>
      </div>
      <div className="boton-eventos">
        <Link className="btn-eventos" to="/eventos">
          <button className="Section-button w-100">Arma tu evento</button>
        </Link>
      </div>
      <div className="eventos-boton">
        <Link className="nav-link" to="/eventos">
          <button className="Section-button">Cotizá tu Evento</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Eventos;
