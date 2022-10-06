import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

const Item = ({ menu }) => {

  const textLugarAnimate = {
    offscreen: { filter: " drop-shadow(2px 2px 10px rgb(0, 0, 0))" },
    onscreen: {
      filter: "drop-shadow(2px 2px 10px rgb(255, 0, 0))",
      transition: {
        duration: 0.1,
        yoyo: 4,
      },
    },
  }
  return (
    <div className="item-menu">
      <div className="item-header">
        <motion.img variants={textLugarAnimate} src={menu.img} alt="imagen de menu" />
      </div>
      <div className="item-texto">
        <h2 className="text-start">{menu.titulo}</h2>
        <p>{menu.descripcion}</p>
      </div>
    </div>
  );
};

export default Item;
