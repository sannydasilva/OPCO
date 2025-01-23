import React from "react";
import constructyslogo from "../../assets/constructys.png";
import "./constructys.css";

const constructys = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl w-1/2">
        <figure>
          <img src={constructyslogo} className="logo" alt="logo constructys" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">CONSTRUCTYS</h2>
          <p>Téléphone : </p>
          <p>Mail :</p>
          <p>Prise en charge : </p>
          <p>Avenant : </p>
          <p>Rupture : </p>
          <div className="card-actions justify-end">
            <a
              href="/OPCO/Contacts-Constryctys-IDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Contacts</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default constructys;
