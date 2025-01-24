import React from "react";
import opcoeplogo from "../../assets/opcoep.png";
import "./opcoep.css";

const opcoep = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-opcoep w-1/2">
        <figure className="figureopcoep">
          <a href="https://www.opcoep.fr/" target="_blank">
            <img src={opcoeplogo} className="logoopcoep" alt="logo opcoep" />
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

export default opcoep;
