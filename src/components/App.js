import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from "./layouts/Frame";
import BurgersPage from "../pages/BurgersPage";
import AddressPage from "../pages/AddressPage";
import AboutPage from "../pages/AboutPage";
import burgers from "../dummyData";
import { BurgerContext } from "../store/BurgerContext";
import { useState } from "react";

function App() {
  const [selectedBurgers, setSelectedBurgers] = useState([]);
  const value = { selectedBurgers, setSelectedBurgers };
  return (
    <BurgerContext.Provider value={value}>
      <BrowserRouter>
        <Frame />
        <Routes>
          <Route path="/" element={<BurgersPage data={burgers} />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </BurgerContext.Provider>
  );
}

export default App;
