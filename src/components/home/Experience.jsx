import React from "react";
import "./stylesHome/home.css";
import { motion } from "framer-motion/dist/framer-motion";


const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5 },
  },
};
const mensajeAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5 },
  },
};
const imageAnimate = {
  offscreen: { y: 400, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {duration: 1 },
  },
};
const logosAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.7 },
  },
};

const Experience = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      // transition={{ staggerChildren: 0.5 }}
      className="container-fluid experiencia"
    >
      <motion.h2 variants={textAnimate} className="Section-title">
        LA EXPERIENCIA
      </motion.h2>
      <motion.img
        variants={imageAnimate}
        src="./img/pathComplete.svg"
        alt="img-experiencia"
        className="experiencia-linea"
      />
      <div className="row">
        <div className="col-6 col-md-4 experiencia-logo">
          <motion.img
            variants={logosAnimate}
            src="./logos/logo.png"
            alt="logo-eltaller"
            className="Experiencia-logo"
          />
        </div>
        <motion.div variants={mensajeAnimate} className="col-6 col-md-4 experiencia-mensaje">
          <p
            
            className="Experiencia-text"
          >
            Un lugar que combina
            <br />
            la amistad, rica
            <br />
            comida y la pasión
            <br /> por los carros
          </p>
        </motion.div>
        <div className="col-0 col-md-4 experiencia-imagen">
          <motion.img
           variants={logosAnimate}
            src="./img/experiencias1.png"
            alt="logo-eltaller"
            className="Experiencia-img-desk"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

