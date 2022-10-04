import React from "react";

const Item = ({ menu }) => {
  return (
    <div className="item-menu">
      <div className="item-header">
        <img src={menu.img} alt="imagen de menu" />
      </div>
      <div className="item-texto">
        <h2 className="text-start">{menu.titulo}</h2>
        <p>{menu.descripcion}</p>
      </div>
    </div>
  );
};

export default Item;
