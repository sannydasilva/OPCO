import React from "react";
import opco2ilogo from "../../assets/opco2i.png";
import "./opco2i.css";

const opco2i = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div>
          <div className="card card-side bg-neutral shadow-xl-opco2i w-1/2">
            <figure>
              <a href="https://www.opco2i.fr/" target="_blank">
                <img
                  src={opco2ilogo}
                  className="logoopco2i"
                  alt="logo opco2i"
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
      </div>
    </div>
  );
};

export default opco2i;
