import React from "react";
import constructyslogo from "../../assets/constructys.png";
import "./constructys.css";

const constructys = () => {
  return (
    <div className="constructyscontainer">
      {/* card 1 */}
      <div className="flex justify-center items-center min-h-screen-constructys">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-constructys">
          <figure className="constructys-figure">
            <a href="https://www.constructys.fr/" target="_blank">
              <img
                src={constructyslogo}
                className="logoaconstructys"
                alt="logo constructys"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 42 27 49 49
            </p>
            <p>
              <strong>Mail : </strong> apprentissage.idf@constructys.fr
            </p>
            <p>
              <strong>Mail facturation : </strong>{" "}
              facture.apprentissage@constructys.fr
            </p>
            <p>
              <strong>Prise en charge : </strong> à récupérer sur la plateforme
            </p>
            <p>
              <strong>Avenant :</strong> l'entreprise doit faire le nécessaire
              pour informer l'OPCO
            </p>
            <p>
              <strong>Rupture : </strong> envoyer formulaire rupture à
              apprentissage.idf@constructys.fr et informer si maintien ou non
              (possible de déclarer la date de rupture en anticipée)
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-constructys drawer-end">
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
                href="/OPCO/Contacts-Constryctys-IDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacts
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

export default constructys;
