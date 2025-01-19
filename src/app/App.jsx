import Afdas from "../pages/afdas/afdas";
import Akto from "../pages/akto/akto";
import Atlas from "../pages/atlas/atlas";
import Constructys from "../pages/constructys/constructys";
import Ocapiat from "../pages/ocapiat/ocapiat";
import Opco2i from "../pages/opco_2i/opco2i";
import Opcoep from "../pages/opco_ep/opcoep";
import Opcomobilites from "../pages/opco_mobilites/opcomobilites";
import Opcosante from "../pages/opco_sante/opcosante";
import Opcommerce from "../pages/opcommerce/opcommerce";
import Uniformation from "../pages/uniformation/uniformation";
import Home from "../pages/home/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/OPCO" element={<Home />}></Route>
          <Route path="/afdas" element={<Afdas />}></Route>
          <Route path="/atlas" element={<Atlas />}></Route>
          <Route path="/akto" element={<Akto />}></Route>
          <Route path="/constructys" element={<Constructys />}></Route>
          <Route path="/ocapiat" element={<Ocapiat />}></Route>
          <Route path="/opco2i" element={<Opco2i />}></Route>
          <Route path="/opcoep" element={<Opcoep />}></Route>
          <Route path="/opcomobilites" element={<Opcomobilites />}></Route>
          <Route path="/opcosante" element={<Opcosante />}></Route>
          <Route path="/opcommerce" element={<Opcommerce />}></Route>
          <Route path="/uniformation" element={<Uniformation />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
