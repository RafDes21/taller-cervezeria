import React from "react";
import "./homeCss/experiencia.css";
import { motion } from "framer-motion/dist/framer-motion";

const Experiencia = () => {
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
      className="experiencia"
    >
      <motion.img
        variants={textLugarAnimate}
        className="vector"
        src="./assets/vector/vect.png"
      />
      <h1 className="experiencia-desktop">EXPERIENCIA "EL TALLER"</h1>
      <motion.img
        variants={textLugarAnimate}
        className="experiencia-desktop__vector"
        src="./assets/vector/vecExperiencia.png"
        alt="vectorimagen"
      />
      <div className="row mx-0">
        <div className="col-6 col-md-8 experiencia-caja1 px-0">
          <p className="experiencia-caja1__texto">
            Nos inspiramos en la historia detrás de los platillos que se comían
            en los talleres mecánicos de los años 50.
          </p>

          <img
            className="experiencia-desktop__logo"
            src="./assets/logos/logo.png"
            alt="logoDesktop"
          />
        </div>
        <div className="col-6 col-md-4 experiencia-caja2 px-0">
          <img
            className="experiencia-logo"
            src="./assets/logos/logo.png"
            alt="logo"
          />
          <img
            className="experiencia-desktop__cerveza"
            src="./assets/instagram/img3.png"
            alt="imagen-cerveza"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experiencia;
