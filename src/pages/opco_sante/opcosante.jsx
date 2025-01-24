import React from "react";
import logosante from "../../assets/opcosante.png";
import "./opcosante.css";

const opcosante = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-opcosante w-1/2">
        <figure className="figureopcosante">
          <a href="https://www.opco-sante.fr/accueil" target="_blank">
            <img
              src={logosante}
              className="logoopcosante"
              alt="logo opcosante"
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

export default opcosante;
