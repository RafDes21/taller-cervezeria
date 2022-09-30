import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LugarMas from "../pages/LugarMas";
import MenuMas from "../pages/MenuMas";
import EventosMas from "../pages/EventosMas";
import ReservasMas from "../pages/ReservasMas";
import NosotrosMas from "../pages/NosotrosMas";
import Layout from "../layout/Layout";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/lugar" element={<LugarMas/>} />
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
