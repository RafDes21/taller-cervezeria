import React from "react";
import "./stylesHome/eventosDesktop.css";

const EventosDesktop = () => {
  return (
    <div className="row eventos-Desktop">
      <div className="col-md-6 eventos-caja1">
        <div className="eventos-caja__imagen">
          <img src="./img/eventos/eventosA.png" />
        </div>
        <h2>Karaoke</h2>
        <h3>Viernes 7 pm</h3>
      </div>
      <div className="col-md-6 eventos-caja2">
        <img src="./img/eventos/eventosB.png" />
        <h2>
          Arma tu
          <br /> evento
        </h2>
      </div>
    </div>
  );
};

export default EventosDesktop;
