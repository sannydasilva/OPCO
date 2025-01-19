import { useState } from "react";
import logo from "../assets/logo_upec_cfa.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <a href="https://cfa.u-pec.fr/" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>

          <div>
            <h1 className="text-5xl font-bold">Informations OPCO</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
