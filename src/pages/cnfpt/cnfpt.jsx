import React from "react";
import cnfptlogo from "../../assets/cnfpt.png";
import "./cnfpt.css";

const Cnfpt = () => {
  return (
    <div className="cnfptlogocontainer">
      <div className="flex justify-center items-center min-h-screen-cnfptlogo">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-cnfptlogo">
          <figure className="cnfptlogo-figure">
            <a href="https://www.cnfpt.fr/" target="_blank">
              <img
                src={cnfptlogo}
                className="logocnfptlogo"
                alt="logo cnfptlogo"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong>
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
      <div className="drawer-cnfptlogo drawer-end">
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

export default Cnfpt;
