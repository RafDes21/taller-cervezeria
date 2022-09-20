import React from "react";
import Booking from "../components/home/Booking";
import Eventos from "../components/home/Eventos";
import Experience from "../components/home/Experience";
import Instagram from "../components/home/Instagram";
import Lugar from "../components/home/Lugar";
import Menu from "../components/home/Menu";
import Slider from "../components/home/Slider";
import "./rutaHome.css";

const Home = () => {
  return (
    <>
      <Slider />
      <Booking />
      <div className="main container px-0">
        <div className="fondo">
          <img
            className="main-imagen"
            src="./imgMain/imgTop.png"
            alt="imagenTop"
          />
          <div className="main-division"></div>
          <img
            className="main-imagen"
            src="./imgMain/imgbottom.png"
            alt="imagenBottom"
          />
        </div>
        <div className="main-secciones">
          <Experience />
          <Lugar />
          <Menu />
          <Eventos />
          <Instagram />
        </div>
      </div>
    </>
  );
};

export default Home;
