import React from "react";
import aktologo from "../../assets/akto.png";
import "./akto.css";

const akto = () => {
  return (
    <div className="aktocontainer">
      <div className="flex justify-center items-center min-h-screen-akto">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-akto">
          <figure>
            <a href="https://www.akto.fr/" target="_blank">
              <img src={aktologo} className="logoakto" alt="logo akto" />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 88 13 10 00
            </p>
            <p>
              <strong>Mail : </strong> gestionnaire en charge du portefeuille :
              Virginie Chevalier : virginie.chevalier@akto.fr
            </p>
            <p>
              <strong>Prise en charge :</strong> à récupérer sur plateforme
            </p>
            <p>
              <strong>Avenant :</strong> à déposer sur plateforme + mail
              gestionnaire Akto
            </p>
            <p>
              <strong>Rupture : </strong>à déposer sur plateforme + mail
              gestionnaire Akto
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-akto drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
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
                href="/OPCO/akto-tuto-contrat-app.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tuto contrat
              </a>
            </li>
            <li>
              <a
                href="/OPCO/akto-tuto-depot-facture.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tuto facture
              </a>
            </li>
            <li>
              <a
                href="/OPCO/akto-webinaire-financement.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Webinaire financement
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default akto;
