import React from "react";
import ocapiatlogo from "../../assets/ocapiat.png";
import "./ocapiat.css";

const ocapiat = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="card card-side bg-neutral shadow-xl-ocapiat w-1/2">
          <figure>
            <a href="https://www.ocapiat.fr/" target="_blank">
              <img
                src={ocapiatlogo}
                className="logoocapiat"
                alt="logo ocapiat"
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
  );
};

export default ocapiat;
