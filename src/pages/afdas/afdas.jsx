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
          <p>Téléphone : 01 44 78 38 45</p>
          <p>Mail :</p>
          <p>Prise en charge : réception mail avec échéancier </p>
          <p>
            Avenant : sur le site : Mes demandes de contact puis Nouvelle
            demande
          </p>
          <p>
            Rupture : sur le site : Mes demandes de contact puis Nouvelle demand
          </p>
          <div className="card-actions justify-end">
            <a
              href="/OPCO/afdas-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-neutral">Guide utilisateur</button>
            </a>
            <a
              href="/OPCO/afdas-guide-factu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-neutral">Guide facturation</button>
            </a>
          </div>
          {/* <div className="card-actions justify-end">
            <a
              href="/OPCO/afdas-guide-factu.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-neutral">Guide facturation</button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default afdas;
