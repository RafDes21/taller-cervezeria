import React from "react";
import Booking from "../components/home/Booking";
import Eventos from "../components/home/Evento";
import Experiencia from "../components/home/Experiencia";
import Instagram from "../components/home/Instagram";
import ElLugar from "../components/home/ElLugar";
import Menu from "../components/home/ElMenu";
import Slider from "../components/home/Slider";


const Home = () => {
  return (
    <div >
      <Slider />
      <Booking />
      <Experiencia />
      <ElLugar />
      <Menu />
      <Eventos />
      <Instagram />
    </div>
  );
};

export default Home;
