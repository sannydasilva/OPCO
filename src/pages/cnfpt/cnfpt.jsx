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
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">TEST</button>
            </div> */}
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="card2cnfpt">
        <div className="card cnfpt2-bg-base-100 w-96 shadow-xl">
          {/* <figure>
            <a href="https://www.cnfpt.fr/" target="_blank">
              <img src={cnfptlogo} className="logocnfpt" alt="logo cnfpt" />
            </a>
          </figure> */}
          <div className="card-body-cnfpt">
            {/* <p>Téléphone : </p>
            <p>Mail :</p>
            <p>Prise en charge : </p>
            <p>Avenant : </p>
            <p>Rupture : </p> */}
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
      </div>
    </div>
  );
};

export default Cnfpt;
