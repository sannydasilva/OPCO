import React from "react";
import opcomobilitelogo from "../../assets/opcomobilite.png";
import "./opcomobilites.css";

const opcomobilites = () => {
  return (
    <div className="opcomobilitelogocontainer">
      <div className="flex justify-center items-center min-h-screen-opcomobilitelogo">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-opcomobilitelogo">
          <figure className="opcomobilitelogo-figure">
            <a href="https://www.opcomobilites.fr/" target="_blank">
              <img
                src={opcomobilitelogo}
                className="logoopcomobilitelogo"
                alt="logo opcomobilitelogo"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 83 77 54 80
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
      <div className="drawer-opcomobilitelogo drawer-end">
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
    // <div>
    //   <div className="card card-side bg-neutral shadow-xl-opcomobilite w-1/2">
    //     <figure className="figureopcomobilite">
    //       <a href="https://www.opcomobilites.fr/" target="_blank">
    //         <img
    //           src={opcomobilitelogo}
    //           className="logoopcomobilite"
    //           alt="logo opcomobilite"
    //         />
    //       </a>
    //     </figure>
    //     <div className="card-body">
    //       <p>Téléphone : </p>
    //       <p>Mail :</p>
    //       <p>Prise en charge : </p>
    //       <p>Avenant : </p>
    //       <p>Rupture : </p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-neutral">TEST</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default opcomobilites;
