import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Homepage from "./pages/homepage/homepage.component";
import Animes from "./pages/animes/animes.component";
import Mangas from "./pages/mangas/mangas.component";
import Add from "./pages/add/add.component";
// import TestDB from "./pages/tests/test.db.component";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact="true" path="/" element={<Homepage />} />
        <Route exact="true" path="/animes" element={<Animes />} />
        <Route exact="true" path="/mangas" element={<Mangas />} />
        <Route exact="true" path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
