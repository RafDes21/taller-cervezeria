import React from "react";
import "./eventosDesktop.css";
import { motion } from "framer-motion/dist/framer-motion";

const EventosDesktop = () => {

  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.1,
        yoyo: 4,
      },
    },
  }
  return (
    <div className="row eventos-Desktop">
      <div className="col-md-6 eventos-caja1">
        <div className="eventos-caja__imagen">
          <motion.img variants={textLugarAnimate} className="imagen1" src="./img/eventos/eventosA.png" alt="imagen de eventos"/>
        </div>
        <h2>Karaoke</h2>
        <h3>Viernes 7 a 12 pm</h3>
      </div>
      <div className="col-md-6 eventos-caja2">
        <motion.img variants={textLugarAnimate} className="imagen2" src="./img/eventos/eventosB.png" alt="imagen de evento"/>
        <h2>
          Arma tu
          <br /> evento
        </h2>
      </div>
    </div>
  );
};

export default EventosDesktop;
