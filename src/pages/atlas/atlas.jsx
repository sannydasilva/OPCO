import React from "react";
import atlaslogo from "../../assets/atlas.png";
import "./atlas.css";

const atlas = () => {
  return (
    <div className="atlascontainer">
      {/* card 1 */}
      <div className="flex justify-center items-center min-h-screen-atlas">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-atlas">
          <figure className="atlas-figure">
            <a href="https://www.opco-atlas.fr/" target="_blank">
              <img src={atlaslogo} className="logoatlas" alt="logo atlas" />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 43 46 01 60
            </p>
            <p>
              <strong>Mail : </strong> instructionapprentissagecfa@opco-atlas.fr
            </p>
            <p>
              <strong>Prise en charge : </strong> à récupérer sur la plateforme
            </p>
            <p>
              <strong>Avenant :</strong> le CFA ne peut pas déposer de document,
              seule l'entreprise peut le faire
            </p>
            <p>
              <strong>Rupture : </strong> déclaration via le site en cliquant
              sur "déclarer une rupture". Lorsque la rupture est traitée par
              l'OPCO, il faudra déclarer le maintien ou non en formation
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-atlas drawer-end">
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
              <a>Doc 1</a>
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

export default atlas;
