import React from "react";
import { Header, Texto } from "../Header/Header";

const ReservasComp = () => {
  const img = "./assets/reservas/reservas.png";
  const h1="RESERVAS"
  const h3 = "Vivi la experiencia a toda marcha"

  return (
    <div>
      <div>
        <Header img={img} />
      </div>
      <Texto texto1={h1} texto2={h3} />
    </div>
  );
};

export default ReservasComp;
