import React from "react";
import "./nosotros.css";

const Nosotros = () => {
  return (
    <div id="nosotros">
      <img className="vector" src="./assets/vector/vect.png" />
      <div className="nosotros-img">
        <img src="./assets/nosotros/nosotros.png" />
      </div>
      <div className="nosotros">
        <h1 className="text-center">NOSOTROS</h1>
        <h3 className="text-center">La pasión nos inspira</h3>
        <section className="nosotros-seccion">
          <div className="nosotros-seccion__caja1">
            <p className="text-center">
              Somos un restaurant de comida urbana, inspirado en la historia
              detrás de los platillos que se comían en los talleres mecánicos de
              los años 50.
            </p>
            <p className="text-center">
              Nuestra ambientación te transportará a aquellas épocas. Podrás
              sentir la calidez de esos lugares.
            </p>
            <p className="text-center">
              Hacemos tributo a los valores de amistad y compañerismo que alli
              se vivian, a la tradición, la buena comida y la pasión por los
              autos.
            </p>
            <p className="text-center">
              En cada rincón podrás crear momentos e historias innolvidables,
              como se hacía antes.
            </p>
          </div>
          <div className="nosotros-seccion__caja2">
            <img src="./assets/nosotros/logo.png" />
          </div>
          <div className="nosotros-seccion__caja3">
            <h3 className="text-center">Nuestra inspiración</h3>
            <p className="text-center">
              Los automóviles comenzaron a circular en México en 1895. Con ello
              nacen los talleres mecánicos. Estos talleres eran encabezados por
              “maestros” dedicados a reparar los autos.
            </p>
            <p className="text-center">
              Los maestros llevaban un “itacate”: manera coloquial de llamar a
              la comida que llevaban para almorzar.
            </p>
            <p className="text-center">
              De esos platillos, entre herramientas, fierros y el día a día,
              nace la inspiración de nuestro concepto.
            </p>
            <p className="text-center">
              Nos inspiramos en esa comida de hogar y trabajo, pero la adaptamos
              a lo urbano de la ciudad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nosotros;
