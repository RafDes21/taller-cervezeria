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
    <div className="main">
      <Slider />
      <Booking />
      <Experience />
      <Lugar />
      <Menu />
      {/*<Eventos />
      <Instagram /> */}
    </div>
  );
};

export default Home;
