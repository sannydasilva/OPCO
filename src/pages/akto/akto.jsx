import React from "react";
import aktologo from "../../assets/akto.png";
import "./akto.css";

const akto = () => {
  return (
    <div className="card card-side bg-neutral shadow-xl w-1/2">
      <figure>
        <img src={aktologo} className="logo" alt="logo akto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">AKTO</h2>
        <p>Téléphone : 01 88 13 10 00</p>
        <p>
          Mail : gestionnaire en charge du portefeuille : Virginie Chevalier :
          virginie.chevalier@akto.fr
        </p>
        <p>Prise en charge : à récuperer sur plateforme</p>
        <p>Avenant : à déposer sur plateforme + mail gestionnaire Akto</p>
        <p>Rupture : à déposer sur plateforme + mail gestionnaire Akto</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default akto;
