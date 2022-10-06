import React from "react";
import { Link } from "react-router-dom";
import { Header, Texto } from "../Header/Header";
import "./eventosComp.css";
import { motion } from "framer-motion/dist/framer-motion";

const EventosComp = () => {
  const img = "./assets/eventos/eventos.png";
  const h1 = "EVENTOS";
  const h3 = "Reparamos tu diversión";

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
     initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.1}}
    className="wrapper">
      <Header img={img} />
      <Texto texto1={h1} texto2={h3} />

      <section className="Eventos-content mx-auto">
        <p className="Eventos-text text-center">
          Hacemos de tu evento, un formula 1.<br/> Cuéntanos, qué quieres celebrar y
          ¡Arrancamos motores!
        </p>

        <div className="Eventos-form">
          <form action="">
            <div className="inputContainer">
              <input
                type="text"
                id="nombre"
                className=""
                placeholder="Nombre y apellido"
              />
              <label for="nombre" class="label">
                Nombre
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="number"
                id="tel"
                className=""
                placeholder="Número de celular"
              />
              <label for="tel" class="label">
                Teléfono
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="mail"
                id="mail"
                className=""
                placeholder="Dirección de correo electrónico"
              />
              <label for="mail" class="label">
                E-mail
              </label>
            </div>
            <div className="inputContainer">
              <input type="date" id="fecha" className="" placeholder="fecha" />
              <label for="fecha" class="label">
                Fecha
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                id="cant"
                className=""
                placeholder="Cantidad de invitados"
              />
              <label for="cant" class="label">
                Cantidad de personas
              </label>
            </div>
            <div className="inputContainer">
              <input
                type="textarea"
                id="comentario"
                className=""
                placeholder="Déjanos tu comentario"
              />
              <label for="comentario" class="label"></label>
            </div>
            <div className="inputContainer Button-wrapper">
              <Link to="/eventos" className="Form-button">
                <button>Cotizá</button>
              </Link>
            </div>
          </form>
        </div>

        <div className="Eventos-detalle">
          <h2 className="text-center">Ven a disfrutar de nuestras noches únicas:</h2>

          <div className="Eventos-detalle-content">
            <motion.img
            variants={menuAnimate}
              src="./assets/vector/vectoreventos.png"
              className="Eventos-detalle-vector"
              alt=""
            />
            <div className="Eventos-detalle-wrapper row mx-0">
              <div className="karaoke col-6 col-md-6">
                <img
                  src="./img/eventos/eventosA.png"
                  alt="karaoke en el taller"
                  className="imagen-karaoke"
                />
                <>
                  <h4>Karaoke</h4>
                  <p>Viernes 7 a 12 pm</p>
                </>
              </div>
              <div className="bandas col-6 col-md-6">
                <>
                  <h4>
                    Arma tu
                    <br />
                    evento
                  </h4>
                  {/* <p>Viernes 7pm</p> */}
                </>
                <img
                  src="./img/eventos/eventosB.png"
                  alt="bandas en el taller"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default EventosComp;
