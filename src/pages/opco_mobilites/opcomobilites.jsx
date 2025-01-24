import React from "react";
import opcomobilitelogo from "../../assets/opcomobilite.png";
import "./opcomobilites.css";

const opcomobilites = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-opcomobilite w-1/2">
        <figure className="figureopcomobilite">
          <a href="https://www.opcomobilites.fr/" target="_blank">
            <img
              src={opcomobilitelogo}
              className="logoopcomobilite"
              alt="logo opcomobilite"
            />
          </a>
        </figure>
        <div className="card-body">
          <p>Téléphone : </p>
          <p>Mail :</p>
          <p>Prise en charge : </p>
          <p>Avenant : </p>
          <p>Rupture : </p>
          <div className="card-actions justify-end">
            {/* <a
                      href="/OPCO/afdas-guide.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
            <button className="btn btn-neutral">TEST</button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default opcomobilites;
