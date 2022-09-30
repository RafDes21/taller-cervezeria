import React from "react";

const Item = ({ menu }) => {
  return (
    <div className="item-menu">
      <div className="item-header">
        <img src={menu.img} />
      </div>
      <div className="item-texto">
        <h2 className="text-center">{menu.titulo}</h2>
        <p>{menu.descripcion}</p>
      </div>
    </div>
  );
};

export default Item;
