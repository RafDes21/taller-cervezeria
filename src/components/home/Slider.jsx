import React, { useEffect, useState } from "react";
import "./stylesHome/slider.css";
// import imagenes from "./SliderImg"; //array de imágenes
import menus from "./menus"; //array de imágenes

const Slider = () => {
  const [active1, setActive1] = useState({ opacity: "1", transition: "0.2s" });
  const [active2, setActive2] = useState({ opacity: "0" });
  const [active3, setActive3] = useState({ opacity: "0" });
  const [vector1, setVector1] = useState("slider-vector");
  const [vector2, setVector2] = useState();
  const [vector3, setVector3] = useState();
  const [item, setItem] = useState(1);

  const cambio = () => {
    console.log("click");
    if (item === 1) {
      setActive1({ opacity: "0" });
      setActive2({ opacity: "1", transition: "0.2s" });
      setActive3({ opacity: "0" });
      setVector1();
      setVector2("slider-vector");
      setVector3();
      setItem(item + 1);
    }
    if (item === 2) {
      setActive1({ opacity: "0" });
      setActive2({ opacity: "0" });
      setActive3({ opacity: "1 ", transition: "0.2s" });
      setVector1();
      setVector2();
      setVector3("slider-vector");
      setItem(item + 1);
    }
    if (item === 3) {
      setActive1({ opacity: "1", transition: "0.2s" });
      setActive2({ opacity: "0" });
      setActive3({ opacity: "0" });
      setVector1("slider-vector");
      setVector2();
      setVector3();
      setItem(1);
    }
  };
  useEffect(() => {
    const imagenesCambio = setInterval(cambio, 5000);

    return () => {
      clearInterval(imagenesCambio);
    };
  }, [item]);

  return (
    <div>
      <div id="carrusel">
        <div className="carrusel1" style={active1}>
          <img src="./imgSlider/carrusel1.png"></img>
          <img
            className="slider-logo"
            src="./logos/logo2.png"
            alt="imagenLogo"
          />
          <img
            id="slider1"
            className={vector1}
            src="./imgSlider/vector.png"
            alt="imagenVector"
          />
          <img className="slider-menu" src={menus[0]} alt="imagenTaco" />

          <h1 className="slider-mensaje mensaje1">Amigos, Comidas y Carros</h1>
        </div>
        <div className="carrusel2" style={active2}>
          <img src="./imgSlider/carrusel2.png"></img>
          <img
            className="slider-logo"
            src="./logos/logo2.png"
            alt="imagenLogo"
          />
          <img
            id="slider2"
            className={vector2}
            src="./imgSlider/vector.png"
            alt="imagenVector"
          />
          <img className="slider-menu" src={menus[1]} alt="imagenTaco" />

          <h1 className="slider-mensaje mensaje2">Amigos, Comidas y Carros</h1>
        </div>
        <div className="carrusel3" style={active3}>
          <img src="./imgSlider/carrusel3.png"></img>
          <img
            className="slider-logo"
            src="./logos/logo2.png"
            alt="imagenLogo"
          />
          <img
            id="slider3"
            className={vector3}
            src="./imgSlider/vector.png"
            alt="imagenVector"
          />
          <img className="slider-menu" src={menus[2]} alt="imagenTaco" />

          <h1 className="slider-mensaje mensaje3">
            Amigos,
            <br /> Comidas y<br /> Carros
          </h1>
        </div>
      </div>
      {/* <button onClick={cambio}> click</button> */}
    </div>
  );
};

export default Slider;
