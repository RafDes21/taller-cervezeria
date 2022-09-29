import React from "react";

const EventosMobile = () => {
  return (
    <div className="row mobile">
      <div className="col-6 mobile-caja1">
        <div className="mobile-text1">
          <h4>Karaoke</h4>
          <p>Jueves 21 horas</p>
        </div>
        <div className="cajas-imagen">
          <img
            className="mobile-img1"
            src="./img/eventos/eventos2.png"
            alt="imagen-eventos"
          />
        </div>
      </div>
      <div className="col-6 mobile-caja2">
        <div className="cajas-imagen">
          <img
            className="mobile-img2"
            src="./img/eventos/eventos1.png"
            alt="imagen-eventos"
          />
        </div>
        <div className="mobile-text2">
          <h4 className="text-right">Bandas <br/>en vivo</h4>
          <p>Viernes 21 horas</p>
        </div>
      </div>
    </div>
  );
};

export default EventosMobile;
