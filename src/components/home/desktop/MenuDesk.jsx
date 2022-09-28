import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./menuDesk.css";

const MenuDesk = () => {
  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.1,
        yoyo: 4,
      },
    },
  };

  return (
    <div className="row menu-desktop">
      <motion.img
        variants={textLugarAnimate}
        className="vectorDesk"
        src="./assets/vector/path.png"
      />
      <div className="col-md-4">
        <img
          src="./img/menu/menu1.png"
          alt="imagen menu"
          className="menu-img menu1"
        />
        <h4>
          TACOS
          <br />
          VELOCES
        </h4>
        <p>
          Sabrosa carne
          <br />
          vacuna, palta
          <br />y cebolla
        </p>
      </div>
      <div className="col-md-4">
        <img
          src="./img/menu/menu1.png"
          alt="imagen menu"
          className="menu-img menu1"
        />
        <h4>
          TACOS
          <br />
          VELOCES
        </h4>
        <p>
          Sabrosa carne
          <br />
          vacuna, palta
          <br />y cebolla
        </p>
      </div>
      <div className="col-md-4">
        <img
          src="./img/menu/menu1.png"
          alt="imagen menu"
          className="menu-img menu1"
        />
        <h4>
          TACOS
          <br />
          VELOCES
        </h4>
        <p>
          Sabrosa carne
          <br />
          vacuna, palta
          <br />y cebolla
        </p>
      </div>
    </div>
  );
};

export default MenuDesk;
