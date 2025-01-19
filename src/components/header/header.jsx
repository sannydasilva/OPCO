import React from "react";
import logo from "../../assets/logo_upec_cfa.png";

const header = () => {
  return (
    <>
      <div>
        <a href="https://cfa.u-pec.fr/" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </>
  );
};

export default header;
