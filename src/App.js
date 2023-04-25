import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";

import MainPage from "./components/MainPage";
import NotFound from "./components/NotFound";
import SinglePageDrink from "./components/SinglePageDrink";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="drink/:id" element={<SinglePageDrink />} />
      </Routes>
    </BrowserRouter>
  );
}
