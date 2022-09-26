import React from "react";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="row mx-0">
          <div className="col-4 footerDerechos ">
            <div className="footerDerechos-texto">
              <h6>Unite al equipo!</h6>
              <p>
                Todos los derechos
                <br /> reservados
              </p>
            </div>
            <p className="footerDerechos-p">
              +54-22152312 <br />
              Lunes a domingos de 9 a 23 hs
              <br /> calle 1 nro 2345, pasaje ferreira
            </p>
          </div>
          <div className="col-4 footerLogo">
            <img className="footer-logo" src="./logos/logo.png" alt="logo" />
            <p className="footer-p">
              +54-22152312 <br />
              Lunes a domingos de 9 a 23 hs
              <br /> calle 1 nro 2345, pasaje ferreira
            </p>
            <div className="footerLogo-texto">
              <h6>Unite al equipo!</h6>
              <p>
                Todos los derechos
                <br /> reservados
              </p>
            </div>
          </div>
          <div className="col-4 footerRedes">
            <h4>Seguinos:</h4>
            <h4 className="footerRedes-texto">Seguinos en nuestras redes:</h4>
            <div className="caja-footerRedes">
              <Link className="redes" to="/lugar">
                <AiOutlineInstagram />
              </Link>
              <Link className="redes" to="/lugar">
                <AiOutlineFacebook />
              </Link>
              <Link className="redes" to="/lugar">
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
