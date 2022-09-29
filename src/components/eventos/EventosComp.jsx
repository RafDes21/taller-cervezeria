import React from "react";
import { Header, Texto } from "../Header/Header";
import "./eventosComp.css"

const EventosComp = () => {
  const img = "./assets/eventos/eventos.png";
  const h1 = "EVENTOS";
  const h3 = "Diversión a toda marcha";
  return (
    <div>
      
        <Header img={img} />
      <section className="Eventos-content mx-auto">
        <Texto texto1={h1} texto2={h3} />

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
            <div className="inputContainer Button-wrapper">
              <a href=""className="Form-button">
                <button >Cotizá</button>
              </a>
            </div>
          </form>
        </div>

        <div className="Eventos-detalle">
            <p>
              Ven a disfrutar de nuestras noches únicas:
            </p>

            <div className="Eventos-detalle-content">
            <img src="./assets/vector/vectoreventos.png" className="Eventos-detalle-vector" alt="" />  
            <div className="Eventos-detalle-wrapper">
              <div className="karaoke">
                <img src="./img/eventos/eventosA.png" alt="karaoke en el taller" />
                <>
                <h4>Karaoke</h4>
                <p>Viernes 7pm</p>
                </>
              </div>
              <div className="bandas">
                <>
                <h4>Bandas en<br/>vivo</h4>
                <p>Viernes 7pm</p>
                </>
                <img src="./img/eventos/eventosB.png" alt="bandas en el taller" />
              </div>
            </div>
            </div>
        </div>

              </section>

    </div>
  );
};

export default EventosComp;
