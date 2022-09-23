import React from "react";
import "./stylesHome/home.css";
import { motion } from "framer-motion/dist/framer-motion";

const Experience = () => {
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
      className="container-fluid experiencia"
    >
      <h2 className="Section-title">LA EXPERIENCIA</h2>
      <motion.img
        variants={textLugarAnimate}
        className="experiencia-linea"
        src="./imgSlider/vector.png"
        alt="img-experiencia"
      />
      <div className="row">
        <div className="col-6 col-md-4 experiencia-logo">
          <img
            src="./logos/logo.png"
            alt="logo-eltaller"
            className="caja-logo"
          />
        </div>
        <div className="col-6 col-md-4 Section-texto">
          <p className="experiencia-mensaje">
            Un lugar que combina
            <br />
            la amistad, rica
            <br />
            comida y la pasión
            <br /> por los carros
          </p>
        </div>
        <div className="col-0 col-md-4 experiencia-imagen">
          <img
            src="./img/experiencias1.png"
            alt="logo-eltaller"
            className="experiencia-img-desk"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
