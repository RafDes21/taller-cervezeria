import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

const textInstagramAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
// const imagevectorAnimate = {
//   offscreen: { y: 400, opacity: 0 },
//   onscreen: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 1.5 },
//   },
// };
const imageEventosAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Instagram = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="instagram"
    >
      <motion.div variants={textInstagramAnimate} className="lugar-titulo">
        <div>
          <h2 className="Section-title mx-3">EVENTOS</h2>
          <p className="Section-subtitle mx-3">Diversión a toda marcha</p>
        </div>
        <div className="instagram-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </motion.div>
      <motion.div variants={imageEventosAnimate } className="row">
        <div className="col-12 col-md-6 caja-instagram">
          <img className="instagram-imagenes" src="./img/instagram/img1.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img2.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img3.png" alt="imagenInstagram" />
        </div>
        <div className="col-12 col-md-6 instagram-oculto1 caja-instagram">
          <img className="instagram-imagenes" src="./img/instagram/img1.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img2.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img3.png" alt="imagenInstagram" />
        </div>
      </motion.div>
      <motion.div variants={imageEventosAnimate } className="row instagram-oculto2">
        <div className="col-12 col-md-6 caja-instagram">
          <img className="instagram-imagenes" src="./img/instagram/img1.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img2.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img3.png" alt="imagenInstagram" />
        </div>
        <div className="col-12 col-md-6 caja-instagram">
          <img className="instagram-imagenes" src="./img/instagram/img1.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img2.png" alt="imagenInstagram" />
          <img className="instagram-imagenes" src="./img/instagram/img3.png" alt="imagenInstagram" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Instagram;
