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
          <h1 className="card-title">Informations CFA</h1>
          <h2>Université Paris Est Créteil Val de Marne</h2>
          <h2>Adresse : 61, avenue Général de Gaulle 94010 CRETEIL</h2>
          <p>SIRET : 199 411 117 000 13</p>
          <p>CODE UAI : 094 11 11 X</p>
          <p>N° déclaration activité : 11 94 P 000 794</p>
          <p>Code organisme : 94287</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
