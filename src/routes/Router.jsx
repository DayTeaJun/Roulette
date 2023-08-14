import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Roulette = lazy(() => import("../components/Roulette"));

export default function Router() {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<Roulette />} />
      </Routes>
    </BrowserRouter>
  );
}
