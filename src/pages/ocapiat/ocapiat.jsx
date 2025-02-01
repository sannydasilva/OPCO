import React from "react";
import ocapiatlogo from "../../assets/ocapiat.png";
import "./ocapiat.css";

const ocapiat = () => {
  return (
    <div className="ocapiatcontainer">
      <div className="flex justify-center items-center min-h-screen-ocapiat">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-ocapiat">
          <figure className="ocapiat-figure">
            <a href="https://www.ocapiat.fr/" target="_blank">
              <img
                src={ocapiatlogo}
                className="logoaocapiat"
                alt="logo ocapiat"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 09 70 84 51 18
            </p>
            <p>
              <strong>Mail : </strong> dgs1@ocapiat.fr
            </p>
            <p>
              <strong>Prise en charge : </strong> à récupérer sur la plateforme
            </p>
            <p>
              <strong>Avenant :</strong> à déposer sur plateforme
            </p>
            <p>
              <strong>Rupture : </strong> déclaration via la plateforme
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-ocapiat drawer-end">
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

export default ocapiat;
