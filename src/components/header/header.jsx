import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_upec_cfa.png";
import "./header.css";

const header = () => {
  return (
    <>
      <div className="header">
        <a href="https://cfa.u-pec.fr/" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            MENU
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/afdas">Afdas</NavLink>
            </li>
            <li>
              <NavLink to="/akto">Akto</NavLink>
            </li>
            <li>
              <NavLink to="/atlas">Atlas</NavLink>
            </li>
            <li>
              <NavLink to="/constructys">Constructys</NavLink>
            </li>
            <li>
              <NavLink to="/ocapiat">Ocapiat</NavLink>
            </li>
            <li>
              <NavLink to="/opco2i">Opco 2i</NavLink>
            </li>
            <li>
              <NavLink to="/opcoep">Opco EP</NavLink>
            </li>
            <li>
              <NavLink to="/opcomobilites">Opco Mobilités</NavLink>
            </li>
            <li>
              <NavLink to="/opcosante">Opco Santé</NavLink>
            </li>
            <li>
              <NavLink to="/opcommerce">Opcommerce</NavLink>
            </li>
            <li>
              <NavLink to="/uniformation">Uniformation</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
