import React from "react";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EventosMas } from "./routes/EventosMas";
import { ReservasMas } from "./routes/ReservasMas";
import { NosotrosMas } from "./routes/NosotrosMas";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import { LugarMas } from "./routes/LugarMas";
import MenuCom from "./components/menu/MenuCom.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lugar" element={<LugarMas/>} />
        <Route exact path="/menu" element={<MenuCom />} />
        <Route exact path="/eventos" element={<EventosMas />} />
        <Route exact path="/reservas" element={<ReservasMas />} />
        <Route exact path="/nosotros" element={<NosotrosMas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
