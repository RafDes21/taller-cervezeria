import React from "react";

const Item = ({ menu }) => {
  return (
    <div className="item-menu">
      <div className="item-header">
        <img src={menu.img} />
      </div>
      <h2 className="text-center">{menu.titulo}</h2>
      <p>{menu.descripcion}</p>
    </div>
  );
};

export default Item;
