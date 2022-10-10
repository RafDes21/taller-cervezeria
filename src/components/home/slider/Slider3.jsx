import React from "react";

export const Slider3 = () => {
  return (
    <div className="carrusel3">
      <img
        className="carrusel-imagen"
        alt="imagen"
        src="./assets/slider/img3.png"
      ></img>
      <img
        className="slider-logo carrusel-logo3"
        src="./assets/logos/logo2.png"
        alt="imagenLogo"
      />
      <img
        id="slider3"
        className="slider-vector"
        src="./assets/slider/neon3.png"
        alt="imagenVector"
      />
      <img
        className="slider-menu carrusel-menu3"
        src="./assets/slider/menu3.png"
        alt="imagenTaco"
      />

      <h1 className="slider-mensaje mensaje3">
        Comida urbana, autos
        <br />y el mejor ambiente
      </h1>
    </div>
  );
};
