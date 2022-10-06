import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const EventosMobile = () => {

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
    <div className="row mobile">
      <div className="col-6 mobile-caja1">
        <div className="mobile-text1">
          <h4>Karaoke</h4>
          <p>Jueves 21 horas</p>
        </div>
        <div className="cajas-imagen">
          <motion.img 
          variants={textLugarAnimate}
            className="mobile-img1"
            src="./img/eventos/eventos2.png"
            alt="imagen-eventos"
          />
        </div>
      </div>
      <div className="col-6 mobile-caja2">
        <div className="cajas-imagen">
          <motion.img
          variants={textLugarAnimate}
            className="mobile-img2"
            src="./img/eventos/eventosA.png"
            alt="imagen-eventos"
          />
        </div>
        <div className="mobile-text2">
          <h4 className="text-right">Armá tu <br/>evento</h4>
          
        </div>
      </div>
    </div>
  );
};

export default EventosMobile;
