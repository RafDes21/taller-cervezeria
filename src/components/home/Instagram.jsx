import React from "react";

import { Link } from "react-router-dom";



const Instagram = () => {
  return (
    <div
    
      className="instagram"
    >
      <div className="lugar-titulo">
        <div>
          <h2 className="Section-title">INSTAGRAM</h2>
          <p className="Section-sub-title">Diversión a toda marcha</p>
        </div>
        <div className="instagram-link">
          <Link className="Section-link" to="/lugar">
            Ver más...
          </Link>
        </div>
      </div>
      <div className="row mx-0">
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
      </div>
      <div  className="row instagram-oculto2 mx-0">
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
      </div>
    </div>
  );
};

export default Instagram;
