import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import "./homeCss/slider.css";
import menus from "./js/sliderMenu"; //array de imágenes
// import { motion } from "framer-motion/dist/framer-motion";

const Slider = () => {
  const [active1, setActive1] = useState({ opacity: "1", transition: "0.2s" });
  const [active2, setActive2] = useState({ opacity: "0" });
  const [active3, setActive3] = useState({ opacity: "0" });
  const [vector1, setVector1] = useState("slider-vector");

  // buttons
  const [button1, setButton1] = useState({
    background: "rgba(250, 208, 44, 1)",
  });
  const [button2, setButton2] = useState();
  const [button3, setButton3] = useState();
  // const [vector2, setVector2] = useState();
  const [vector3, setVector3] = useState();
  const [item, setItem] = useState(1);

  const cambio = () => {
    // console.log("click");
    if (item === 1) {
      setActive1({ opacity: "0" });
      setActive2({ opacity: "1", transition: "0.2s" });
      setActive3({ opacity: "0" });
      setVector1();
      // setVector2("slider-vector");
      setVector3();
      setButton1();
      setButton2({ background: "rgba(250, 208, 44, 1)" });
      setButton3();
      setItem(item + 1);
    }
    if (item === 2) {
      setActive1({ opacity: "0" });
      setActive2({ opacity: "0" });
      setActive3({ opacity: "1 ", transition: "0.2s" });
      // setVector1();
      // setVector2();
      setVector3("slider-vector");
      setButton1();
      setButton2();
      setButton3({ background: "rgba(250, 208, 44, 1)" });
      setItem(item + 1);
    }
    if (item === 3) {
      setActive1({ opacity: "1", transition: "0.2s" });
      setActive2({ opacity: "0" });
      setActive3({ opacity: "0" });
      setVector1("slider-vector");
      // setVector2();
      setVector3();
      setButton1({ background: "rgba(250, 208, 44, 1)" });
      setButton2();
      setButton3();
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
        <div className="buttons">
          <div onClick={() => setItem(3)} style={button1}></div>
          <div onClick={cambio} style={button2}></div>
          <div onClick={cambio} style={button3}></div>
        </div>
        <div className="carrusel1" style={active1}>
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
            className={vector1}
            src="./assets/slider/neon1.png"
            alt="imagenVector"
          />
          <img
            className="slider-menu carrusel-menu1"
            src={menus[0]}
            alt="imagenTaco"
          />

          <h1 className="slider-mensaje mensaje1">
            Comida urbana, autos y<br /> el mejor ambiente
          </h1>
        </div>
        <div className="carrusel2" style={active2}>
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
          {/* <img
            id="slider2"
             className={vector2}
            src="./imgSlider/vector.png"
            alt="imagenVector"
          /> */}
          <img
            className="slider-menu carrusel-menu2"
            src={menus[1]}
            alt="imagenTaco"
          />

          <h1 className="slider-mensaje mensaje2">
            Comida urbana, autos
            <br />y el mejor ambiente
          </h1>
        </div>
        <div className="carrusel3" style={active3}>
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
            className={vector3}
            src="./assets/slider/neon3.png"
            alt="imagenVector"
          />
          <img
            className="slider-menu carrusel-menu3"
            src={menus[2]}
            alt="imagenTaco"
          />

          <h1 className="slider-mensaje mensaje3">
            Comida urbana, autos
            <br />y el mejor ambiente
          </h1>
        </div>
      </div>
      {/* <button onClick={cambio}> click</button> */}
    </div>
  );
};

export default Slider;
