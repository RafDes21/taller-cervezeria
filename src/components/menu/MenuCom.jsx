import React from "react";
import { Link } from "react-router-dom";
import { Header, Texto } from "../Header/Header";
import "./MenuCom.css";

const MenuCom = () => {
  const img = "./assets/menu/menu.png";
  const h1 = "EL MENU";
  const h3 = " La comida de los maestros";

  return (
    <div className="Menu-wrapper">
        <Header img={img} />
        <Texto texto1={h1} texto2={h3} />
      <section className="Menu-content">
        <div className="Menu-comida">
          <div className="Menu-comida-card">
            <img src="./img/menu/menuA.png" alt="imagen menu" />
            <h5>Alitas por kilo</h5>
            <p>Dos sabores a elección</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menub.png" alt="imagen menu" />
            <h5>Pozole</h5>
            <p>Caldo a base de maiz con torillas</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menuc.png" alt="imagen menu" />
            <h5>La monster taller </h5>
            <p>Hamburguesa doble con piña y salsa bbq</p>
          </div>
          <div className="Menu-comida-card">
            <img src="./img/menu/menud.png" alt="imagen menu" />
            <h5>Tacos Baterías</h5>
            <p>Bistec, cebolla y cilantro. </p>
          </div>
        </div>
        <div className="Menu-bebidas">
          <h4>Nuestras Bebidas</h4>
          <div className="Menu-bebidas-slider">
            <img src="./img/menu/bebidasA.png" alt="img bebidas" />
            <img src="./img/menu/bebidasB.png" alt="img bebidas" />
            <img src="./img/menu/bebidasC.png" alt="img bebidas" />
          </div>
        </div>
        <div className="Menu-carta">
          <h4>Nuestras cartas</h4>
          <Link to="/menu">
            <button>Ver Menú Completo</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MenuCom;
