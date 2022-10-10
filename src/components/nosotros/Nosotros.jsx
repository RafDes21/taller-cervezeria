import React from "react";
import { Header, Texto } from "../Header/Header";
import NosDesktop from "./NosDesktop";
import "./nosotros.css";
import { motion } from "framer-motion/dist/framer-motion";

const Nosotros = () => {
  const img = "./assets/nosotros/nosotros.png";
  const h1 = "NOSOTROS";
  const h3 = "La pasión por los carros nos une";

  const menuAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.2,
        yoyo: 4,
      },
    },
  };
  return (
    <motion.div
      id="nosotros"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.4 }}
    >
      <Header img={img} />
      <Texto texto1={h1} texto2={h3} />
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
            Hacemos tributo a los valores de amistad y compañerismo que alli se
            vivian, a la tradición, la buena comida y la pasión por los autos.
          </p>
          <p className="text-center">
            Si eres un apasionado por los carros, ven a visitarnos y disfruta de
            los mejores platillos.
          </p>
        </div>
        <div className="nosotros-seccion__caja2">
          <motion.img
            variants={menuAnimate}
            className="vector"
            src="./assets/vector/vectorNosMob.png"
            alt="vector-imagen"
          />
          <img
            className="menu-logo"
            src="./assets/nosotros/logo.png"
            alt="imagen-logo"
          />
        </div>
        <div className="nosotros-seccion__caja3">
          <h3 className="text-center">Nuestra inspiración</h3>
          <p className="text-center">
            Los automóviles comenzaron a circular en México en 1895. Con ello
            nacen los talleres mecánicos. Estos talleres eran encabezados por
            “maestros” dedicados a reparar los autos.
          </p>
          <p className="text-center">
            Los maestros llevaban un “itacate”: manera coloquial de llamar a la
            comida que llevaban para almorzar.
          </p>
          <p className="text-center">
            De esos platillos, entre herramientas, fierros y el día a día, nace
            la inspiración de nuestro concepto.
          </p>
          <p className="text-center">
            Nos inspiramos en esa comida de hogar y trabajo, pero la adaptamos a
            lo urbano de la ciudad.
          </p>
        </div>
      </section>
      <div className="nosotros-desktop-componente">
        <NosDesktop />
      </div>
    </motion.div>
  );
};

export default Nosotros;
