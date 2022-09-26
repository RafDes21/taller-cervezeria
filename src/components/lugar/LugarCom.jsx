import React from "react";
import { Header, Texto } from "../Header/Header";
import "./LugarMas.css";

const LugarCom = () => {
  const img = "./img/LugarMas/imgHeader.png";
  const h1 = "EL LUGAR";
  const h3 = "Unos boxes muy chingones";

  return (
    <div className="Lugar-wrapper">
      <Header img={img} />
      <section className="content">
        <Texto texto1={h1} texto2={h3} />
        <div className="wrapper">
          <p className="Lugar-header-text">
            Gracias a nuestra ambientación podras trasnsportante y sentir la
            calidez de aquellos <span>talleres mecánicos</span> que son nuestra
            inspiración.
          </p>
          <p className="Lugar-header-text">
            Hacemos tributo a los valores de amistad y compañerismo que alli se
            vivian, a la tradición, la buena comida y la pasión por los autos.
          </p>
          <p className="Lugar-header-text">
            En cada rincón podrás crear momentos e historias innolvidables, como
            se hacía antes.{" "}
          </p>

          <div className="Lugar-container">
            <h4 className="Lugar-h4">DENTRO DE BOXES</h4>
            <p>
              Disfruta y relajate dentro de nuestro salon principal. Podras
              disfrutar de nuestra increible ambientación y la climatización más
              confortable.
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
            <h4 className="Lugar-h4 txt-right">FUERA DE BOXES</h4>
            <p className="txt-right">
              Tenemos una amplia terraza, espacio muy codiciado entre nuestros
              clientes. Aprovecha y disfruta de este espacio único en la ciudad.
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
            <h4 className="Lugar-h4 txt-center">DONDE ENCONTRARNOS</h4>

            <div className="embed-responsive embed-responsive-16by9 map-wrapper">
              <iframe
                className="embed-responsive-item map "
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15044.840074962005!2d-99.1792661!3d19.4895981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8365a16997cecbf6!2sPasaje%20Ferrer%C3%ADa!5e0!3m2!1ses-419!2sar!4v1664049591781!5m2!1ses-419!2sar"
                width="1280"
                height="600"
                title="mapa"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <img
            alt="imagen"
            className="Lugar-img p-3 mb-3 mx-auto"
            src="./img/LugarMas/donde.png"
          /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LugarCom;
