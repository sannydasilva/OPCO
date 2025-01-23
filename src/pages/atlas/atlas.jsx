import React from "react";
import atlaslogo from "../../assets/atlas.png";
import "./atlas.css";

const atlas = () => {
  return (
    <div>
      <div className="card card-side bg-neutral shadow-xl-atlas w-1/2">
        <figure>
          <a href="https://www.opco-atlas.fr/" target="_blank">
            <img src={atlaslogo} className="logoatlas" alt="logo atlas" />
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
            <button className="btn btn-neutral">Guide OPCO</button>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default atlas;
