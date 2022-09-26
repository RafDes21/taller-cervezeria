import React from "react";
import "./header.css";

const Header = ({img}) => {
  return (
    <div className="header-img">
      <img src={img} />
    </div>
  );
};

export default Header;
