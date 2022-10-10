import React from "react";


export const Slider1 = () => {
  return (
    <div className="carrusel1">
      <img
        className="carrusel-imagen"
        alt="imagen"
        src="./assets/slider/img1.png"
      />
      <img
        className="slider-logo carrusel-logo1"
        src="./assets/logos/logo2.png"
        alt="imagenLogo"
      />
      <img
        id="slider1"
        className="slider-vector"
        src="./assets/slider/neon1.png"
        alt="imagenVector"
      />
      <img
        className="slider-menu carrusel-menu1"
        src="./assets/slider/menu1.png"
        alt="imagenTaco"
      />

      <h1 className="slider-mensaje mensaje1">
        Comida urbana, autos y<br /> el mejor ambiente
      </h1>
    </div>
  );
};


