import React from "react";
import { Header, Texto } from "../Header/Header";
import "./MenuCom.css";
import { motion } from "framer-motion/dist/framer-motion";
import pdf from "../pdf/menu.pdf";

const MenuCom = () => {
  const img = "./assets/menu/imgMenu/imgTop.png";
  const h1 = "EL MENU";
  const h3 = " Afinamos tu paladar";

  return (
    <div className="Menu-wrapper">
      <Header img={img} />
      <Texto texto1={h1} texto2={h3} />

      <section className="Menu-content-mobile">
        <div className="Menu-comida">
          <div className="Menu-comida-card">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/menu/imgMenu/desayuno.png"
              alt="imagen menu"
            />
            <h5>DESAYUNOS</h5>
            {/* <p>Dos sabores a elección</p> */}
          </div>
          <div className="Menu-comida-card">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./img/menu/MenuB.png"
              alt="imagen menu"
            />
            <h5>ENTRADAS</h5>
            {/* <p>Caldo a base de maiz con torillas</p> */}
          </div>
          <div className="Menu-comida-card">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./img/menu/MenuC.png"
              alt="imagen menu"
            />
            <h5>HAMBURGUESAS</h5>
            {/* <p>Hamburguesa doble con piña y salsa bbq</p> */}
          </div>
          <div className="Menu-comida-card">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./img/menu/MenuD.png"
              alt="imagen menu"
            />
            <h5>TACOS</h5>
            {/* <p>Bistec, cebolla y cilantro. </p> */}
          </div>
        </div>
        <div className="Menu-bebidas">
          <h4>Nuestras Bebidas</h4>
          <div className="Menu-bebidas-slider">
            <img src="./img/menu/BebidasA.png" alt="img bebidas" />
            <img src="./img/menu/BebidasB.png" alt="img bebidas" />
            <img src="./img/menu/BebidasC.png" alt="img bebidas" />
          </div>
        </div>
        <div className="Menu-carta">
          <h4>Nuestras cartas</h4>
          <a href={pdf} download>{/*Menu PDF*/}
            <button>Ver Menú Completo</button>
          </a>
        </div>
      </section>
      {/* DESKTOP */}
      <section className="Menu-content-desktop">
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">DESAYUNOS</h4>
          <div className="Menu-section-wrapper">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards row mx-0">
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuA1.png" alt="desayunos" />
                <h5 className="text-center">Chilaquiles</h5>
                <p className="text-center">Con huevo, pollo o bisteck</p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuA2.png" alt="desayunos" />
                <h5 className="text-center">Enchiladas</h5>
                <p className="text-center">Verdes o mole</p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img
                  className="desayuno-imagen3"
                  src="./assets/menu/imgMenu/menuA3.png"
                  alt="desayunos"
                />
                <h5 className="text-center">Hotcakes Taller</h5>
                <p className="text-center">
                  Hot Cakes con 2 huevos fritos estrellados y tocino
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">ENTRADAS</h4>
          <div className="Menu-section-wrapper">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards row mx-0">
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuB1.png" alt="desayunos" />
                <h5 className="text-center">Nachos taller</h5>
                <p className="text-center">
                  Queso, chiles, jalapeños,
                  <br /> salsa especial.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuB2.png" alt="desayunos" />
                <h5 className="text-center">Las diesel</h5>
                <p className="text-center">
                  Alitas bañadas en salsa el
                  <br /> taller
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuB3.png" alt="desayunos" />
                <h5 className="text-center">Sopa Tortilla</h5>
                <p className="text-center">Sopa con tortilla</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">BURRITOS</h4>
          <div className="Menu-section-wrapper">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards row mx-0">
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuC1.png" alt="desayunos" />
                <h5 className="text-center">El alternador</h5>
                <p className="text-center">
                  Burrito de huevo, tocino y<br /> queso.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img
                  className="burrito-imagen2"
                  src="./assets/menu/imgMenu/menuC2.png"
                  alt="desayunos"
                />
                <h5 className="text-center">El torno</h5>
                <p className="text-center">
                  Burrito de cerdo a la bbq
                  <br /> acompañado de cebolla
                  <br /> caramelizada.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuC3.png" alt="desayunos" />
                <h5 className="text-center">La pinza</h5>
                <p className="text-center">
                  Burrito de pastor con
                  <br /> queso.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">TACOS</h4>
          <div className="Menu-section-wrapper">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards row mx-0">
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuD1.png" alt="desayunos" />
                <h5 className="text-center">3 ejes</h5>
                <p className="text-center">
                  Carne al pastor, cebolla,
                  <br /> cilantro y piña.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuD2.png" alt="desayunos" />
                <h5 className="text-center">Baterías</h5>
                <p className="text-center">Bistec, cebolla y cilantro.</p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img src="./assets/menu/imgMenu/menuD3.png" alt="desayunos" />
                <h5 className="text-center">Bujias</h5>
                <p className="text-center">
                  Carnitas, cebolla y<br /> cilantro.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">HAMBURGUESAS</h4>
          <div className="Menu-section-wrapper">
            <motion.img
              initial={{ filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" }}
              whileInView={{
                filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
                transition: {
                  duration: 0.2,
                  yoyo: 4,
                },
              }}
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards row mx-0">
              <div className="Menu-desktop-card col-md-4">
                <img
                  className="hamburguesas-imagen1"
                  src="./assets/menu/imgMenu/hamburguesa1.png"
                  alt="desayunos"
                />
                <h5 className="text-center">La desarmadora</h5>
                <p className="text-center">
                  Carne de res con
                  <br /> champiñones y cebolla
                  <br /> caramelizada.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img
                  src="./assets/menu/imgMenu/hamburguesa2.png"
                  alt="desayunos"
                />
                <h5 className="text-center">La Hawaiana</h5>
                <p className="text-center">
                  Carne de res, queso
                  <br /> monchego y piña.
                </p>
              </div>
              <div className="Menu-desktop-card col-md-4">
                <img
                  className="hamburguesas-imagen3"
                  src="./assets/menu/imgMenu/hamburguesa3.png"
                  alt="desayunos"
                />
                <h5 className="text-center">La monster Taller</h5>
                <p className="text-center">
                  Doble carne de res con
                  <br /> queso amarillo y monchego <br />
                  piña, tocino y bbq
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cartaCompleta">
          <span>MIRA NUESTRA CARTA COMPLETA</span>
          <a href={pdf} download>{/*Menu PDF*/}
            <img
              src="./assets/vector/flechasMenu.png"
              className="flechasCarta"
              alt=""
            />
            {/* <a href="./assets/menu/menu2.pdf" target="_blank" className="imgCarta" rel="noopener noreferrer">
          <img src="./assets/menu/imgMenu/logoCarta.png" alt="" />
          </a> */}
          </a>
        </div>
      </section>
    </div>
  );
};

export default MenuCom;
