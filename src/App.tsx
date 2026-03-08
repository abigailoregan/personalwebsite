import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import CV from "./pages/CV";

import ArtworkLayout from "./pages/artwork/ArtworkLayout";
import ArtworkHome from "./pages/artwork/ArtworkHome";
import Abstract from "./pages/artwork/Abstract";
import Figures from "./pages/artwork/Figures";
import Landscapes from "./pages/artwork/Landscapes";
import Love from "./pages/artwork/Love";
import Murals from "./pages/artwork/Murals";
import Portraits from "./pages/artwork/Portraits";
import Stills from "./pages/artwork/Stills";

import ExhibitionsLayout from "./pages/exhibitions/ExhibitionsLayout";
import ExhibitionsHome from "./pages/exhibitions/ExhibitionsHome";
import Spukhaus2023 from "./pages/exhibitions/Spukhaus2023";
import AfoContent2024 from "./pages/exhibitions/AfoContent2024";
import PaprSalonShow2025 from "./pages/exhibitions/PaprSalonShow2025";
import SriSaSummerA from "./pages/exhibitions/SriSaSummerA";
import SriSaSummerB from "./pages/exhibitions/SriSaSummerB";
import Home from "./pages/Home";

import './css/App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />

        {/* Artwork */}
        <Route path="/artwork" element={<ArtworkLayout />}>
          <Route index element={<ArtworkHome />} />
          <Route path="abstract" element={<Abstract />} />
          <Route path="figures" element={<Figures />} />
          <Route path="landscapes" element={<Landscapes />} />
          <Route path="love" element={<Love />} />
          <Route path="murals" element={<Murals />} />
          <Route path="portraits" element={<Portraits />} />
          <Route path="stills" element={<Stills />} />
        </Route>

        {/* Exhibitions */}
        <Route path="/exhibitions" element={<ExhibitionsLayout />}>
          <Route index element={<ExhibitionsHome />} />
          <Route path="spukhaus2023" element={<Spukhaus2023 />} />
          <Route path="afocontent2024" element={<AfoContent2024 />} />
          <Route path="paprsalonshow2025" element={<PaprSalonShow2025 />} />
          <Route path="srisasummera" element={<SriSaSummerA />} />
          <Route path="srisasummerb" element={<SriSaSummerB />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;