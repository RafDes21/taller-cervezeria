import React from "react";
import "./nosDesktop.css";

const NosDesktop = () => {
  return (
    <div className="nosDesktop nosDesktop-wrapper">
      <div className="row nosDesktop-caja1">
        <div className="col-7">
          <p>
            Somos un restaurant de comida urbana, inspirado en la historia
            detrás de los platillos que se comían en los talleres mecánicos de
            los años 50.
          </p>
          <p>
            Nuestra ambientación te transportará a aquellas épocas. Podrás
            sentir la calidez de esos lugares.
          </p>
          <p>
            Hacemos tributo a los valores de amistad y compañerismo que alli se
            vivian, a la tradición, la buena comida y la pasión por los autos.
          </p>
          <p>
            En cada rincón podrás crear momentos e historias innolvidables, como
            se hacía antes.
          </p>
        </div>
        <div className="col-5">
          <div className="logos-index">
          <img
            className="logo1"
            src="./assets/nosotros/logoTaller2.png"
            alt="logo"
          />
          <img
            className="logo2"
            src="./assets/nosotros/logoTaller2.png"
            alt="logo"
          />
          <img
            className="logo3"
            src="./assets/nosotros/logoTaller2.png"
            alt="logo"
          />
          </div>
        </div>
      </div>
      <div className="nosDesktop-caja2">
        <h3 className="nosDesktop-caja2-h3 text-center">Nuestra inspiración</h3>
        
        <div className="nosDesktop-caja2-wrapper">
        <img
          className="circular-vector-desk"
          src="./assets/vector/vectorNosDesk.png"
          alt="imagenVector"
          />
        <div className="caja2-logos">
          <img
            className=" logos circular1"
            src="./assets/nosotros/inspiA.png"
            alt="imagenCircular"
            />
          <img
            className=" logos circular2"
            src="./assets/nosotros/inspiB.png"
            alt="imagenCircular"
            />
          <img
            className=" logos circular3"
            src="./assets/nosotros/inspiC.png"
            alt="imagenCircular"
            />
          <img
            className=" logos circular4"
            src="./assets/nosotros/inspiD.png"
            alt="imagenCircular"
            />
          <img
            className=" logos circular5"
            src="./assets/nosotros/inspiE.png"
            alt="imagenCircular"
            />
            </div>
        </div>
      </div>
      <div className="nosDesktop-caja3">
        <div className="sub-caja1">
          <p>
            Los automóviles comenzaron a circular en México en 1895. Con ello
            nacen los talleres mecánicos. Estos talleres eran encabezados por
            <span> “maestros” </span>dedicados a reparar los autos.
          </p>
          <p>
            Los maestros llevaban un “itacate”: manera coloquial de llamar a la
            comida que llevaban para almorzar.
          </p>
          <p>
            De esos platillos, entre herramientas, fierros y el día a día, nace
            la inspiración de nuestro concepto.
          </p>
        </div>
        <p className="sub-caja2">
          Nos inspiramos en esa <span>comida de hogar y trabajo</span>, pero la adaptamos a
          lo urbano de la ciudad.
        </p>
      </div>
    </div>
  );
};

export default NosDesktop;
