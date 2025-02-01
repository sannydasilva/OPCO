import React from "react";
import logocommerce from "../../assets/opcommerce.png";
import "./opcommerce.css";

const opcommerce = () => {
  return (
    <div className="opcommercelogocontainer">
      <div className="flex justify-center items-center min-h-screen-opcommercelogo">
        <div className="card akto-bg-base-100 w-96-akto shadow-xl-opcommercelogo">
          <figure className="opcommercelogo-figure">
            <a href="https://www.lopcommerce.com/" target="_blank">
              <img
                src={logocommerce}
                className="logoopcommercelogo"
                alt="logo opcommercelogo"
              />
            </a>
          </figure>
          <div className="card-body">
            <p>
              <strong>Téléphone : </strong> 01 55 37 41 51
            </p>
            <p>
              <strong>Mail : </strong> indiquer sur la PEC : <br />
              iledefrance@lopcommerce.com <br />
              lopcommerce75@lopcommerce.com <br />
              hautsdefrance@lopcommerce.com
            </p>
            <p>
              <strong>Prise en charge : </strong> à récupérer sur plateforme
            </p>
            <p>
              <strong>Avenant :</strong>
            </p>
            <p>
              <strong>Rupture : </strong> déclaration sur plateforme + mail à
              ruptureapprentissage@lopcommerce.com
            </p>
          </div>
        </div>
      </div>
      <div className="drawer-opcommercelogo drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-neutral"
          >
            Documents
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a
                href="/OPCO/Contacts-Constryctys-IDF.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Doc 1
              </a>
            </li>
            <li>
              <a>Doc 2</a>
            </li>
            <li>
              <a>Doc 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default opcommerce;
