import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Lugar from "../pages/Lugar";
import MenuMas from "../pages/Menu";
import EventosMas from "../pages/Eventos";
import ReservasMas from "../pages/Reservas";
import NosotrosMas from "../pages/Nosotros";
import Layout from "../layout/Layout";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/lugar" element={<Lugar/>} />
          <Route path="/menu" element={<MenuMas/>} />
          <Route path="/eventos" element={<EventosMas/>} />
          <Route path="/reservas" element={<ReservasMas/>} />
          <Route path="/nosotros" element={<NosotrosMas/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
