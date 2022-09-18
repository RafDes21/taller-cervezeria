import React from "react";
import Booking from "../components/home/Booking";
import Eventos from "../components/home/Eventos";
import Experience from "../components/home/Experience";
import Lugar from "../components/home/Lugar";
import Menu from "../components/home/Menu";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <>
      <Slider/>
      <Booking />
      <Experience />
      <Lugar />
      <Menu />
      <Eventos />
    </>
  );
};

export default Home;
