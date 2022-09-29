import React from "react";
import "./stylesHome/instagram.css";
import { Link } from "react-router-dom";
import { TituloSecciones } from "../Header/Header";

const Instagram = () => {
  const titulo = "INSTAGRAM";
  const subtitulo = "Seguí nuestro camino";
  const link = "Ir a instagram";
  return (
    <div className="instagram">
      <div className="lugar-titulo">
        <TituloSecciones titulo={titulo} subtitulo={subtitulo} verMas={link} />
      </div>
      <div className="row mx-0">
        <div className="col-12 col-md-6 caja-instagram">
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img1.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img2.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img3.png"
            alt="imagenInstagram"
          />
        </div>
        <div className="col-12 col-md-6 instagram-oculto1 caja-instagram">
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img1.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img2.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img3.png"
            alt="imagenInstagram"
          />
        </div>
      </div>
      <div className="row instagram-oculto2 mx-0">
        <div className="col-12 col-md-6 caja-instagram">
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img1.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img2.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img3.png"
            alt="imagenInstagram"
          />
        </div>
        <div className="col-12 col-md-6 caja-instagram">
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img1.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img2.png"
            alt="imagenInstagram"
          />
          <img
            className="instagram-imagenes"
            src="./assets/instagram/img3.png"
            alt="imagenInstagram"
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
