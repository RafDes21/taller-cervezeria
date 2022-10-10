import React from "react";

export const Slider2 = () => {
  return (
    <div className="carrusel2">
      <img
        className="carrusel-imagen"
        alt="imagen"
        src="./assets/slider/img2.png"
      ></img>
      <img
        className="slider-logo carrusel-logo2"
        src="./assets/logos/logo2.png"
        alt="imagenLogo"
      />

      <img
        className="slider-menu carrusel-menu2"
        src="./imgSlider/menu2.png"
        alt="imagenTaco"
      />

      <h1 className="slider-mensaje mensaje2">
        Comida urbana, autos
        <br />y el mejor ambiente
      </h1>
    </div>
  );
};
