import "./App.css";
import Footer from "./Componnents/Footer/Footer";
import Annoncement from "./Componnents/Header/Annoncement/Annoncement";
import Navbar from "./Componnents/Header/Navbar/Navbar";
import Sections from "./Componnents/Sections/Sections";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./Componnents/Sections/SectionTwo/Play";
import Detail from "./Componnents/Sections/SectionSeven/Detail";
import Odd4 from "./Componnents/Sections/SectionSix/Odds/Odd4";
import Odd5 from "./Componnents/Sections/SectionSix/Odds/Odd5";
import Odd7 from "./Componnents/Sections/SectionSix/Odds/Odd7";
import Odd8 from "./Componnents/Sections/SectionSix/Odds/Odd8";
import Odd9 from "./Componnents/Sections/SectionSix/Odds/Odd9";
import Odd12 from "./Componnents/Sections/SectionSix/Odds/Odd12";
import Odd16 from "./Componnents/Sections/SectionSix/Odds/Odd16";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Annoncement />
        <Navbar />

        <Routes>
          <Route path="/" element={<Sections />} />
          <Route path="/intro" element={<Play />} />
          <Route path="/details" element={<Detail />} />
          <Route path="/odd4" element={<Odd4 />} />
          <Route path="/odd5" element={<Odd5 />} />
          <Route path="/odd7" element={<Odd7 />} />
          <Route path="/odd8" element={<Odd8 />} />
          <Route path="/odd9" element={<Odd9 />} />
          <Route path="/odd12" element={<Odd12 />} />
          <Route path="/odd16" element={<Odd16 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
