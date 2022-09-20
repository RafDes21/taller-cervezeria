import React from "react";
import { Link } from "react-router-dom";
import "./stylesHome/home.css";
import { motion } from "framer-motion/dist/framer-motion";

const textLugarAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const imageLugarAnimate = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const Lugar = () => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className="container-fluid lugar"
    >
      <motion.div variants={textLugarAnimate} className="lugar-titulo">
        <div>
          <h2 className="Section-title">EL LUGAR</h2>
          <p className="Section-subtitle">Unos boxes muy chingones</p>
        </div>
        <div className="lugar-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </motion.div>
      <motion.div variants={imageLugarAnimate} className="row">
        <div className="col-12 col-md-4">
          <img
            src="./img/lugar/lugar1.png"
            alt="imagen-eltaller"
            className="Lugar-img mostrar"
          />
          <img
            src="./img/lugar/lugar1b.png"
            alt="imagen-eltaller"
            className="Lugar-img oculto"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src="./img/lugar/lugar2b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
        <div className="col-6 col-md-4">
          <img
            src="./img/lugar/lugar3b.jpeg"
            alt="imagen-eltaller"
            className="Lugar-img"
          />
        </div>
      </motion.div>
      <div className="Section-btn">
        <Link to="/lugar">
          <motion.button variants={imageLugarAnimate} className="Section-button">Ver Ubicación</motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Lugar;

/* <div className='Lugar'>
<div className='line-wrapper container-fluid'>
  <img src="./img/path2.svg" className="Lugar-line"></img>
</div>
<div className="Lugar-wrapper container-fluid">
<div>
<div className="Section-header">
  <h2 className="Section-title">EL LUGAR</h2> 
  <a href="#" className="Section-link">Ver Más</a>
</div>
<h3 className="Section-subtitle">Unos boxes muy chingones</h3>
</div>

<div className='Lugar-images container-fluid'>
  <div className='Lugar-img lugar1'>
  {/* <img src="./img/lugar/lugar1.png" alt="imagen-eltaller" className="Lugar-img"/> */
/*</div>
  <div className='Lugar-img lugar2'>
  {/* <img src="./img/lugar/lugar2.png" alt="imagen-eltaller" className="Lugar-img" /> */
/*</div>
  <div className='Lugar-img lugar3'>
  {/* <img src="./img/lugar/lugar3.png" alt="imagen-eltaller"className="Lugar-img" /> */
/* </div>
  <div className='Lugar-img lugar4'>
  {/* <img src="./img/lugar/lugar3.png" alt="imagen-eltaller"className="Lugar-img" /> */
/* </div>
</div>
<div className="Section-button-wrapper">
  <a href="#"><button className='Section-button'>Ver Ubicación</button></a>
</div>
</div>
</div> */
