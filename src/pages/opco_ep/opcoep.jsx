import React from "react";
import opcoeplogo from "../../assets/opcoep.png";
import "./opcoep.css";

const opcoep = () => {
  return (
    <div className="opcoepcontainer">
      <div className="flex justify-center items-center min-h-screen-opcoep">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-opcoep">
          <figure className="opcoep-figure">
            <a href="https://www.opcoep.fr/" target="_blank">
              <img src={opcoeplogo} className="logoopcoep" alt="logo opcoep" />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 09 70 83 88 37
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
      <div className="drawer-opcoep drawer-end">
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
                href="/OPCO/opcoep-creer-compte.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Créer un compte
              </a>
            </li>
            <li>
              <a
                href="/OPCO/opcoep-navigation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation
              </a>
            </li>
            <li>
              <a
                href="/OPCO/opcoep-saisie-contrat.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saisir un contrat
              </a>
            </li>
            <li>
              <a
                href="/OPCO/opcoep-gestion-contrats.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gestion d'un contrat
              </a>
            </li>
            <li>
              <a
                href="/OPCO/opcoep-demande-paiement.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demande de paiement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default opcoep;
