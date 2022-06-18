import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingPage2 from "./pages/LandingPage2";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/2" element={<LandingPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}
