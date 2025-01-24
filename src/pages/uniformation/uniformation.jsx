import React from "react";
import logouniformation from "../../assets/uniformation.png";
import "./uniformation.css";

const uniformation = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-uniformation w-1/2">
        <figure className="figureuniformation">
          <a href="https://www.uniformation.fr/" target="_blank">
            <img
              src={logouniformation}
              className="logouniformation"
              alt="logo uniformation"
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

export default uniformation;
