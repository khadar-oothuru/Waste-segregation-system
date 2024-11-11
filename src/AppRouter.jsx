// src/AppRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TotalWaste from "./pages/TotalWaste";
import RealTimeData from "./pages/RealTime";
import Demo from "./pages/Demo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/total-waste" element={<TotalWaste />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/real-time-data" element={<RealTimeData />} />
    </Routes>
  );
};

export default AppRouter;
