import React from "react";
import { Header, Texto } from "../Header/Header";
import "./eventosComp.css"

const EventosComp = () => {
  const img = "./assets/eventos/eventos.png";
  const h1 = "EVENTOS";
  const h3 = "Diversión a toda marcha";
  return (
    <div>
      <div>
        <Header img={img} />
        <Texto texto1={h1} texto2={h3} />
      </div>
      <section className="Eventos-content">
        <p className="Eventos-text">
      Nos ocupamos de organizar tu evento. Contanos los detalles del mismo y solicita una cotización. Un asesor se encargará de enviarte los servicios que ofrecemos y el valor de los mismos.
        </p>

        <div className="Eventos-form">
          <form action="">
            <div className="inputContainer">
              <input type="text" id="nombre" className="" placeholder="Nombre y apellido"/>
              <label for="nombre" class="label">Nombre</label>
            </div>
            <div className="inputContainer">
              <input type="number" id="tel" className="" placeholder="Número de celular"/>
              <label for="tel" class="label">Teléfono</label>
            </div>
            <div className="inputContainer">
              <input type="mail" id="mail" className="" placeholder="Dirección de correo electrónico"/>
              <label for="mail" class="label">E-mail</label>
            </div>
            <div className="inputContainer">
              <input type="date" id="fecha" className="" placeholder="fecha"/>
              <label for="fecha" class="label">Fecha</label>
            </div>
            <div className="inputContainer">
              <input type="text" id="cant" className="" placeholder="Cantidad de invitados"/>
              <label for="cant" class="label">Cantidad de personas</label>
            </div>
            <div className="inputContainer">
              <input type="textarea" id="comentario"className="" placeholder="Déjanos tu comentario"/>
              <label for="comentario" class="label"></label>
            </div>
          </form>
        </div>

      </section>
    </div>
  );
};

export default EventosComp;
