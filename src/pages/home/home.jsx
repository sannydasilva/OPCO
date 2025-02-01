import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container-home">
      <div
        className="card bg-primary text-primary-content w-1/2"
        style={{ backgroundColor: "#4a5f70" }}
      >
        <div className="card-body">
          <h1 className="card-title-home">Informations CFA</h1>
          <h2>Université Paris Est Créteil Val de Marne</h2>
          <h2>Adresse : 61, avenue Général de Gaulle 94010 CRETEIL</h2>
          <p>SIRET : 199 411 117 000 13</p>
          <p>CODE UAI : 094 11 11 X</p>
          <p>N° déclaration activité : 11 94 P 000 794</p>
          <p>Code organisme : 94287</p>
        </div>
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-neutral"
          >
            Documents
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a
                href="/OPCO/precis-apprentissage.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                -PRECIS APPRENTISSAGE
              </a>
            </li>
            <li>
              <a
                href="/OPCO/vademecum.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                -VADEMECUM OPCO
              </a>
            </li>
            <li>
              <a
                href="/OPCO/grille-rem.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                -GRILLE REMUNERATION AU 01/11/2024
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
