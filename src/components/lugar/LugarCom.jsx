import React from "react";
import { Header, Texto } from "../Header/Header";
import "./LugarMas.css";

const LugarCom = () => {
  const img = "./assets/lugar/lugarTop.png";
  const h1 = "EL LUGAR";
  const h3 = "Carburamos el mejor ambiente";

  return (
    <div className="Lugar-wrapper">
      <Header img={img} />
      <Texto texto1={h1} texto2={h3} />
      <section className="content">
        <div className="wrapper">
          <p className="Lugar-header-text text-center">
            Esperamos que nuestra ambientación pueda trasnsportante a esos
            <span> talleres mecánicos</span> que son nuestra inspiración.
          </p>
          <p className="Lugar-header-text text-center">
            Hacemos tributo al “arte automotriz”, la tradición de los maestros
            mecánicos, la buena comida y la pasión por los autos.
          </p>
          <p className="Lugar-header-text text-center">
            Si eres un apasionado o apasionada de los carros, ven a visitarnos y
            comparte con nosotros tus historias y el amor por la mecánica
            automotriz. Y ¿por qué no? disfruta de los mejores platillos de
            comida urbana del norte de la ciudad.
          </p>

          <div className="Lugar-container">
            <h4 className="Lugar-h4">ZONA DE REPARACIONES</h4>
            <p className="Lugar-header-text">
              Vive la experiencia de estar en un taller mecánico, dentro de
              nuestro salón principal.
            </p>
            <div className="Lugar-img-wrapper ">
              <img
                className="Lugar-img col-12 mb-3"
                alt="imagen"
                src="./img/LugarMas/dentro1.png"
              />
              <div className="row d-flex wrap">
                <div className="col-4">
                  <img
                    className="Lugar-img-dsk "
                    src="./img/LugarMas/dentro2.png"
                    alt="Foto de interior"
                  ></img>
                </div>
                <div className="col-4">
                  <img
                    className="Lugar-img-dsk "
                    src="./img/LugarMas/dentro3.png"
                    alt="Foto de interior"
                  ></img>
                </div>
                <div className="col-4">
                  <img
                    className="Lugar-img-dsk "
                    src="./img/LugarMas/dentro4.png"
                    alt="Foto de interior"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="Lugar-container">
            <h4 className="Lugar-h4 txt-right">ZONA DE ENTREGAS</h4>
            <p className="txt-right Lugar-header-text">
              ¿Ya hiciste el cambio de bujías? Ahora disfruta de la mejor
              <br />
              terraza del norte de la ciudad.
            </p>
            <div className="Lugar-img-wrapper ">
              <div className="row">
                <img
                  alt="imagen"
                  className="Lugar-img col-12 mb-3"
                  src="./img/LugarMas/fuera1.png"
                />
              </div>
              <div className="row">
                <div className="col-4">
                  <img
                    className="Lugar-img-dsk"
                    src="./img/LugarMas/fuera2.png"
                    alt="Foto de exterior"
                  ></img>
                </div>

                <div className="col-4">
                  <img
                    className="Lugar-img-dsk"
                    src="./img/LugarMas/fuera3.png"
                    alt="Foto de exterior"
                  ></img>
                </div>

                <div className="col-4">
                  <img
                    className="Lugar-img-dsk"
                    src="./img/LugarMas/fuera4.png"
                    alt="Foto de exterior"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="Lugar-container">
            <h4 className="Lugar-h4 txt-center">NOS ENCONTRAMOS AQUÍ</h4>

            <div className="embed-responsive embed-responsive-16by9 map-wrapper">
              <iframe
                className="embed-responsive-item map "
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15044.840074962005!2d-99.1792661!3d19.4895981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8365a16997cecbf6!2sPasaje%20Ferrer%C3%ADa!5e0!3m2!1ses-419!2sar!4v1664049591781!5m2!1ses-419!2sar"
                title="mapa"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LugarCom;
