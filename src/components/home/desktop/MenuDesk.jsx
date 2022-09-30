import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import "./menuDesk.css";
import Item from "./Item";
import menus from "./menu";

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
      <div className="row menu-fila mx-0 px-0">
        {menus.map((menu, index) => (
          <div className="col-md-4 menu-columna" key={index}>
            <Item menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDesk;
