import React, { useState } from "react";
import "./navBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div id="navBar">
      <Link className="nav-link text-white" to="/">
        <p className="my-0 taller">
          EL TALLER
          <span>CERVECERIA</span>
        </p>
      </Link>

      <ul
        className={mobile ? "show" : "deploy-nav"}
        onClick={() => setMobile(false)}
      >
        <li>
          <NavLink className="nav-link" to="lugar">
            EL LUGAR
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="menu">
            EL MENÚ
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="eventos">
            EVENTOS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="reservas">
            RESERVAS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="nosotros">
            NOSOTROS
          </NavLink>
        </li>
      </ul>

      <div onClick={() => setMobile(!mobile)} className="menu">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
