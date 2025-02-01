import React from "react";
import opco2ilogo from "../../assets/opco2i.png";
import "./opco2i.css";

const opco2i = () => {
  return (
    <div className="opco2icontainer">
      <div className="flex justify-center items-center min-h-screen-opco2i">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-opco2i">
          <figure className="opco2i-figure">
            <a href="https://www.opco2i.fr/" target="_blank">
              <img src={opco2ilogo} className="logoaopco2i" alt="logo opco2i" />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 73 29 43 49
            </p>
            <p>
              <strong>Mail : </strong> gestionnaire Mme Vatonne :
              m.vatonne@opco2i.fr
            </p>
            <p>
              <strong>Prise en charge : </strong> à récupérer sur la plateforme
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
      <div className="drawer-opco2i drawer-end">
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
                Doc 1
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

export default opco2i;
