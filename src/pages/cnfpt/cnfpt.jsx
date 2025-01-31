import React from "react";
import cnfptlogo from "../../assets/cnfpt.png";
import "./cnfpt.css";

const Cnfpt = () => {
  return (
    <div className="cnfptcontainer">
      {/* card 1 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="card cnfpt-bg-base-100 w-96 shadow-xl">
          <figure>
            <a href="https://www.cnfpt.fr/" target="_blank">
              <img src={cnfptlogo} className="logocnfpt" alt="logo cnfpt" />
            </a>
          </figure>
          <div className="card-body">
            <p>Téléphone : </p>
            <p>Mail :</p>
            <p>Prise en charge : </p>
            <p>Avenant : </p>
            <p>Rupture : </p>
          </div>
        </div>
      </div>

      {/* card 2 */}
      {/* <div className="card2cnfpt">
        <div className="card cnfpt2-bg-base-100 w-96 shadow-xl">

          <div className="card-body-cnfpt">

            <div className="card-actions">
              <button className="btn btn-neutral">TEST</button>
            </div>
            <div className="card-actions">
              <button className="btn btn-neutral">TEST</button>
            </div>
            <div className="card-actions">
              <button className="btn btn-neutral">TEST</button>
            </div>
            <div className="card-actions">
              <button className="btn btn-neutral">TEST</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* TEST */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
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
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cnfpt;
