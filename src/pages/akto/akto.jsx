import React from "react";
import aktologo from "../../assets/akto.png";
import "./akto.css";

const akto = () => {
  return (
    <div className="card card-side bg-neutral shadow-xl-akto w-1/2">
      <figure>
        <a href="https://www.akto.fr/" target="_blank">
          <img src={aktologo} className="logoakto" alt="logo akto" />
        </a>
      </figure>

      <div className="card-body">
        <p>Téléphone : 01 88 13 10 00</p>
        <p>
          Mail : gestionnaire en charge du portefeuille : Virginie Chevalier :
          virginie.chevalier@akto.fr
        </p>
        <p>Prise en charge : à récuperer sur plateforme</p>
        <p>Avenant : à déposer sur plateforme + mail gestionnaire Akto</p>
        <p>Rupture : à déposer sur plateforme + mail gestionnaire Akto</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">TEST</button>
        </div>
      </div>
    </div>
  );
};

export default akto;
