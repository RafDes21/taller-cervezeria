import React from "react";
import "./stylesHome/home.css";
// import { motion } from "framer-motion/dist/framer-motion";

// const textAnimate = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {duration: 0.5 },
//   },
// };
// const mensajeAnimate = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {duration: 0.5 },
//   },
// };
// const imageAnimate = {
//   offscreen: { y: 400, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {duration: 1 },
//   },
// };
// const logosAnimate = {
//   offscreen: { y: 100, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: {duration: 0.7 },
//   },
// };

const Experience = () => {
  return (
    <div className="container-fluid experiencia">
      <h2 className="Section-title">LA EXPERIENCIA</h2>
      <img
        src="./imgSlider/vector.png"
        alt="img-experiencia"
        className="experiencia-linea"
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
    </div>
  );
};

export default Experience;
