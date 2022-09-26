import React from "react";
import { Header, Texto } from "../Header/Header";

const EventosComp = () => {
  const img = "./assets/eventos/eventos.png";
  const h1 = "EVENTOS";
  const h3 = "Diversión a toda marcha";
  return (
    <div>
      <div>
        <Header img={img} />
      </div>
      <Texto texto1={h1} texto2={h3} />
    </div>
  );
};

export default EventosComp;
