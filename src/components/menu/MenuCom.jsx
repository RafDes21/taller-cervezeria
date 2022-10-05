import React from "react";
import { Link } from "react-router-dom";
import { Header, Texto } from "../Header/Header";
import "./MenuCom.css";

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
            <img src="./img/menu/menua.png" alt="imagen menu" />
            <h5>Alitas por kilo</h5>
            <p>Dos sabores a elección</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menuB.png" alt="imagen menu" />
            <h5>Pozole</h5>
            <p>Caldo a base de maiz con torillas</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menuC.png" alt="imagen menu" />
            <h5>La monster taller </h5>
            <p>Hamburguesa doble con piña y salsa bbq</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menuD.png" alt="imagen menu" />
            <h5>Tacos Baterías</h5>
            <p>Bistec, cebolla y cilantro. </p>
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
          <Link to="/menu">
            <button>Ver Menú Completo</button>
          </Link>
        </div>
      </section>

      <section className="Menu-content-desktop">
        {/* <Texto texto1={h1} texto2={h3} /> */}
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">DESAYUNOS</h4>
          <div className="Menu-section-wrapper">
            <img
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards">
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuA1.png" alt="desayunos" />
                <h5>Chilaquiles</h5>
                <p>Con hyevo, pollo o bisteck</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuA2.png" alt="desayunos" />
                <h5>Enchiladas</h5>
                <p>Verdes o mole</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuA3.png" alt="desayunos" />
                <h5>Hotcakes Taller</h5>
                <p>Verdes o mole</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">ENTRADAS</h4>
          <div className="Menu-section-wrapper">
            <img
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards">
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuB1.png" alt="desayunos" />
                <h5>Nachos taller</h5>
                <p>Queso, chiles, jalapeños, salsa especial.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuB2.png" alt="desayunos" />
                <h5>Las diesel</h5>
                <p>Alitas bañadas en salsa el taller</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuB3.png" alt="desayunos" />
                <h5>Sopa Tortilla</h5>
                <p>Sopa con tortilla</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">BURRITOS</h4>
          <div className="Menu-section-wrapper">
            <img
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards">
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC1.png" alt="desayunos" />
                <h5>El alternador</h5>
                <p>Burrito de huevo, tocino y queso.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC2.png" alt="desayunos" />
                <h5>El torno</h5>
                <p>
                  Burrito de cerdo a la bbq acompañado de cebolla caramelizada.
                </p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC3.png" alt="desayunos" />
                <h5>La pinza</h5>
                <p>Burrito de pastor con queso.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">TACOS</h4>
          <div className="Menu-section-wrapper">
            <img
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards">
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuD1.png" alt="desayunos" />
                <h5>3 ejes</h5>
                <p>Carne al pastor, cebolla, cilantro y piña.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuD2.png" alt="desayunos" />
                <h5>Baterías</h5>
                <p>Bistec, cebolla y cilantro.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuD3.png" alt="desayunos" />
                <h5>Bujias</h5>
                <p>Carnitas, cebolla y cilantro.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Menu-desktop-section">
          <h4 className="Menu-desktop-h4">HAMBURGUESAS</h4>
          <div className="Menu-section-wrapper">
            <img
              src="./assets/vector/vectorMenuDesktop.png"
              className="Menu-desktop-vector"
              alt=""
            />
            <div className="Menu-desktop-cards">
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC1.png" alt="desayunos" />
                <h5>La desarmadora</h5>
                <p>Carne de res con champiñones y cebolla caramelizada.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC2.png" alt="desayunos" />
                <h5>La Hawaiana</h5>
                <p>Carne de res, queso monchego y piña.</p>
              </div>
              <div className="Menu-desktop-card">
                <img src="./assets/menu/imgMenu/menuC3.png" alt="desayunos" />
                <h5>La monster Taller</h5>
                <p>
                  Doble carne de res con queso amarillo y monchego <br />
                  piña, tocino y bbq
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuCom;
