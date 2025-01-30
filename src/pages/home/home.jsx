import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div
        className="card bg-primary text-primary-content w-1/2"
        style={{ backgroundColor: "#4a5f70" }}
      >
        <div className="card-body">
          <h1 className="card-title-home">Informations CFA</h1>
          <h2>Université Paris Est Créteil Val de Marne</h2>
          <h2>Adresse : 61, avenue Général de Gaulle 94010 CRETEIL</h2>
          <p>SIRET : 199 411 117 000 13</p>
          <p>CODE UAI : 094 11 11 X</p>
          <p>N° déclaration activité : 11 94 P 000 794</p>
          <p>Code organisme : 94287</p>
        </div>
      </div>
      <div className="card-body-home">
        {/* <p>Téléphone : </p>
            <p>Mail :</p>
            <p>Prise en charge : </p>
            <p>Avenant : </p>
            <p>Rupture : </p> */}
        <div className="card-actions">
          <a
            href="/OPCO/precis-apprentissage.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral">Précis</button>
          </a>
        </div>
        {/* <div className="card-actions">
          <button className="btn btn-neutral">RIB CFA</button>
        </div> */}
        <div className="card-actions">
          <a
            href="/OPCO/vademecum.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral">Vademecum OPCO</button>
          </a>
        </div>
        <div className="card-actions">
          <button className="btn btn-neutral">TEST</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
