import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { WasteProvider } from "./WasteContext"
import Home from "./pages/Home";

import TotalWaste from "./pages/TotalWaste";
import RealTimeData from "./pages/RealTime";
import Footer from "./components/Footer";
import Demo from "./pages/demo";

const App = () => {
  return (
    <WasteProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/total-waste" element={<TotalWaste />} />
            <Route path="/demo" element={<Demo />} />

            <Route path="/real-time-data" element={<RealTimeData/>} />
          </Routes>
        </div>
      </Router>
      <Footer/>
    </WasteProvider>
  );
};

export default App;
