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
      <section className="Menu-content">
        <Texto texto1={h1} texto2={h3} />
        <div className="Menu-comida">
          <div className="Menu-comida-card">
            <img src="#" alt="imagen menu" />
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
          </div>
          <div className="Menu-comida-card">
            <img src="#" alt="imagen menu" />
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
          </div>
          <div className="Menu-comida-card">
            <img src="#" alt="imagen menu" />
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
          </div>
          <div className="Menu-comida-card">
            <img src="#" alt="imagen menu" />
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
          </div>
          <div className="Menu-comida-card">
            <img src="#" alt="imagen menu" />
            <h5>Lorem ipsum dolor sit amet consectetur </h5>
            <p>Molestias omnis, quos asperiores, consequatur accusamus </p>
          </div>
        </div>
        <div className="Menu-bebidas">
          <h4>Nuestras Bebidas</h4>
          <div className="Menu-bebidas-slider">
            <img src="#" alt="img bebidas" />
            <img src="#" alt="img bebidas" />
            <img src="#" alt="img bebidas" />
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
