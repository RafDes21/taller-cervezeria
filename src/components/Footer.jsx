import React from "react";
import "./footer.css";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-4 footerDerechos  d-flex">
          <p>Todos los derechos reservados</p>
        </div>
        <div className="col-4 footerLogo">
          <img src="./logos/logo-carousel.png" alt="logoCarrusel"/>
          <h6>Unite al equipo!</h6>
        </div>
        <div className="col-4 footerRedes d-flex">
          <a href="!#">
            <AiOutlineInstagram />
          </a>
          <a href="!#">
            <AiOutlineFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
