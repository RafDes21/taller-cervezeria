import React from "react";
import "./footer.css";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineMail,
} from "react-icons/ai";


const Footer = () => {
  return (
    <div id="footer">
      <div className="footer">
        <div className="row mx-0 p-0">
          <div className="col-3 col-sm-4 footerDerechos ">
            <div className="footerDerechos-texto">
              <h6>Unite al equipo!</h6>
              <p>
                Todos los derechos
                <br /> reservados
              </p>
            </div>
            <p className="footerDerechos-p">
                55 6887 5263 <br />
              Lunes a domingos de 9 a 23 hs
              <br />Antigua Calz. de Guadalupe 99, San Marcos, Azcapotzalco, CDMX
            </p>
          </div>
          <div className="col-6 col-sm-4 footerLogo">
            <img
              className="footer-logo"
              src="./assets/logos/logo.png"
              alt="logo"
            />
            <p className="footer-p">
              55 6887 5263 <br />
              Lunes a domingos de 9 a 23 hs
              <br />Antigua Calz. de Guadalupe 99, San Marcos, Azcapotzalco, CDMXa
            </p>
            <div className="footerLogo-texto">
              <h6>Unite al equipo!</h6>
              <p>
                Todos los derechos
                <br /> reservados
              </p>
            </div>
          </div>
          <div className="col-3 col-sm-4 footerRedes">
            <h4>Seguinos:</h4>
            <h4 className="footerRedes-texto">Seguinos en nuestras redes:</h4>
            <div className="caja-footerRedes">
              <a className="redes" href="https://www.instagram.com/eltallercerveceriamx/" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
              </a>
              <a className="redes" href='https://www.facebook.com/eltallercerveceriamx' target="_blank" rel="noopener noreferrer">
                <AiOutlineFacebook />
              </a>
              <a className="redes" href="mailto:soyeltallercerveceria@gmail.com" target="_blank" rel="noopener noreferrer">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
