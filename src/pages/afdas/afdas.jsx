import React from "react";
import afdaslogo from "../../assets/afdas.png";
import "./afdas.css";

const afdas = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-afdas w-1/2">
        <figure>
          <a href="https://www.afdas.com/" target="_blank">
            <img src={afdaslogo} className="logoafdas" alt="logo afdas" />
          </a>
        </figure>
        <div className="card-body">
          <p>Téléphone : </p>
          <p>Mail :</p>
          <p>Prise en charge : </p>
          <p>Avenant : </p>
          <p>Rupture : </p>
          <div className="card-actions justify-end">
            <a
              href="/OPCO/afdas-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-neutral">Guide OPCO</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default afdas;
