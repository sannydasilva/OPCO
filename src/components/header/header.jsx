import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_upec_cfa.png";
import "./header.css";

const header = () => {
  return (
    <>
      <div className="header">
        <a href="https://cfa.u-pec.fr/" target="_blank">
          <img src={logo} className="logo" alt="Upec logo" />
        </a>
        <a href="/OPCO/" className="svghome">
          <button className="bg-pink-200 text-pink-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </button>
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
              <NavLink to="/OPCO">Home</NavLink>
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
