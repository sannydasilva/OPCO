import React from "react";
import constructyslogo from "../../assets/constructys.png";
import "./constructys.css";

const constructys = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-constructys w-1/2">
        <figure>
          <a href="https://www.constructys.fr/" target="_blank">
            <img
              src={constructyslogo}
              className="logoconstructys"
              alt="logo constructys"
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
            <a
              href="/OPCO/Contacts-Constryctys-IDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-neutral">Contacts</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default constructys;
