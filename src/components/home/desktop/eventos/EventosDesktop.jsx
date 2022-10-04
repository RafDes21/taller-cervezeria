import React from "react";
import "./eventosDesktop.css";

const EventosDesktop = () => {
  return (
    <div className="row eventos-Desktop">
      <div className="col-md-6 eventos-caja1">
        <div className="eventos-caja__imagen">
          <img className="imagen1" src="./img/eventos/eventosA.png" alt="imagen de eventos"/>
        </div>
        <h2>Karaoke</h2>
        <h3>Viernes 7 a 12 pm</h3>
      </div>
      <div className="col-md-6 eventos-caja2">
        <img className="imagen2" src="./img/eventos/eventosB.png" alt="imagen de evento"/>
        <h2>
          Arma tu
          <br /> evento
        </h2>
      </div>
    </div>
  );
};

export default EventosDesktop;
