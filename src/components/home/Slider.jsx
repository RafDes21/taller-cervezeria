import React, { useEffect, useState } from "react";
import "./stylesHome/slider.css";
import imagenes from "./SliderImg"; //array de imágenes
import menus from "./menus"; //array de imágenes

const Slider = () => {
  const [item, setItem] = useState(0); //acá enviaremos la posición de la imagen
  const [aparece, setAparece] = useState(); //controlamos el estado de la opacidad y transición
  const [logo, setLogo] = useState();
  const [vector, setVector] = useState();
  const [menu, setMenu] = useState();
  const [parrafo, setParrafo] = useState();

  const opacity = () => {
    if (item < imagenes.length - 1) {
      setAparece({ opacity: "0" });
      setItem(item + 1);
      animaciones();
    } else {
      setItem(0);
      setAparece({ opacity: "0" });
      setLogo({
        right: "0",
        top: "-7%",
        width: "30%",
        transitionDuration: "2s",
      });
      setVector({
        top: "-30%",
        transform: " translateX(0)",
        transitionDuration: "2s",
      });
      setMenu({ right: "-5%", transitionDuration: "2s" });
      setParrafo({ left: "5%", transitionDuration: "2s" });
    }
  };

  const animaciones = () => {
    if (item === 0) {
      setLogo({
        left: "3%",
        top: "-10%",
      });
      setMenu({
        width: "25%",
        height: "45%",
        bottom: "3%",
        right: "1%",
        transitionDuration: "2s",
      });
      setParrafo({
        left: "7%",
        top: "70%",
        fontZise: "24px",
        transitionDuration: "2s",
      });
    }

    if (item === 1) {
      console.log("estamos");
      setLogo({
        right: "0.5%",
        top: "50%",
        width: "30%",
        transitionDuration: "2s",
      });
      setVector({
        transform: " translateX(-10%)",
        top: "25%",
        transitionDuration: "2s",
      });
      setMenu({
        right: "2%",
        top: "10%",
        width: "35%",
        height: "40%",
        transitionDuration: "2s",
      });
      setParrafo({ left: "15%", bottom: "0", transitionDuration: "2s" });
    }
  };

  useEffect(() => {
    const imagenesCambio = setInterval(opacity, 5000);
    setAparece({ opacity: "1", transition: "all 2s" });
    return ()=>{clearInterval(imagenesCambio)}
  }, [item]);
  
  return (
    <div className="container">
      <div className="slider">
        <img
          className="slider-img"
          style={aparece}
          src={imagenes[item]}
          alt="imagenesDeFondo"
        />
        <img
          className="slider-logo"
          style={logo}
          src="./logos/logo2.png"
          alt="imagenLogo"
        />
        <img
          className="slider-vector"
          style={vector}
          src="./imgSlider/vector.png"
          alt="imagenVector"
        />
        <img
          className="slider-menu"
          style={menu}
          src={menus[item]}
          alt="imagenTaco"
        />
        <div className="slider-parrafo" style={parrafo}>
          {item === 1 ? (
            <p style={parrafo}>Amigos, Comida y Carros</p>
          ) : (
            <p>
              Amigos,
              <br />
              Comida y
              <br />
              Carros
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
