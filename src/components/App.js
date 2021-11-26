import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frame from "./layouts/Frame";
import BurgersPage from "../pages/BurgersPage";
import AddressPage from "../pages/AddressPage";
import AboutPage from "../pages/AboutPage";
import burgers from "../dummyData";
import BurgerContextProvider, { BurgerContext } from "../store/BurgerContext";

function App() {
  return (
    <BurgerContextProvider value={BurgerContext}>
      <BrowserRouter>
        <Frame />
        <Routes>
          <Route path="/" element={<BurgersPage data={burgers} />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </BurgerContextProvider>
  );
}

export default App;
