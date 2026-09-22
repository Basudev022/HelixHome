import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GetInTouchModal from "./components/Home/GetInTouchModal";
import AboutPage from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";

function App() {
  const [showGetInTouch, setShowGetInTouch] = useState(false);

  const handleOpenGetInTouch = () => {
    setShowGetInTouch(true);
  };

  const handleCloseGetInTouch = () => {
    setShowGetInTouch(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home onGetInTouch={handleOpenGetInTouch} />}
        />

        <Route
          path="/about"
          element={<AboutPage onGetInTouch={handleOpenGetInTouch} />}
        />
      </Routes>

      <GetInTouchModal
        isOpen={showGetInTouch}
        onClose={handleCloseGetInTouch}
      />
    </BrowserRouter>
  );
}

export default App;
