import React from "react";
import logosante from "../../assets/opcosante.png";
import "./opcosante.css";

const opcosante = () => {
  return (
    <div className="opcosantelogocontainer">
      <div className="flex justify-center items-center min-h-screen-opcosantelogo">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-opcosantelogo">
          <figure className="opcosantelogo-figure">
            <a href="https://www.opco-sante.fr/accueil" target="_blank">
              <img
                src={logosante}
                className="logoopcosantelogo"
                alt="logo opcosantelogo"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 49 68 10 10
            </p>
            <p>
              <strong>Mail : </strong>
            </p>
            <p>
              <strong>Prise en charge : </strong>
            </p>
            <p>
              <strong>Avenant :</strong>
            </p>
            <p>
              <strong>Rupture : </strong>
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-opcosantelogo drawer-end">
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
                href="/OPCO/opcosante-mode-emploi.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mode d'emploi plateforme
              </a>
            </li>
            <li>
              <a>Doc 2</a>
            </li>
            <li>
              <a>Doc 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default opcosante;
