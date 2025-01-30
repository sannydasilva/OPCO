import React from "react";
import aktologo from "../../assets/akto.png";
import "./akto.css";

const akto = () => {
  return (
    <div className="card card-side bg-neutral shadow-xl-akto w-1/2">
      <figure>
        <a href="https://www.akto.fr/" target="_blank">
          <img src={aktologo} className="logoakto" alt="logo akto" />
        </a>
      </figure>

      <div className="card-body">
        <p>Téléphone : 01 88 13 10 00</p>
        <p>
          Mail : gestionnaire en charge du portefeuille : Virginie Chevalier :
          virginie.chevalier@akto.fr
        </p>
        <p>
          <strong>
            <u>Prise en charge</u>
          </strong>{" "}
          : par téléphone ou à récupérer sur plateforme
        </p>

        <p>Avenant : à déposer sur plateforme + mail gestionnaire Akto</p>
        <p>Rupture : à déposer sur plateforme + mail gestionnaire Akto</p>
        <div className="card-actions justify-end">
          <a
            href="/OPCO/akto-tuto-contrat-app.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral">
              Tuto contrat apprentissage
            </button>
          </a>
          <a
            href="/OPCO/akto-tuto-depot-facture.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral">Tuto dépôt factures</button>
          </a>
          <a
            href="/OPCO/akto-webinaire-financement.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-neutral">Support financement</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default akto;
