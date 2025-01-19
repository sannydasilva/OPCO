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
          <p>Université Paris Est Créteil Val de Marne</p>
          <p>Adresse : 61, avenue Général de Gaulle 94... CRETEIL</p>
          <p>SIRET : xxxxxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
