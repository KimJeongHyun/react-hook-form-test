import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp/SignUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
