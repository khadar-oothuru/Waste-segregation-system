import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import TotalWaste from "./pages/TotalWaste";
import RealTimeData from "./pages/RealTime";
import Demo from "./pages/Demo";
import Login from "./pages/Login";
import AuthContext from "../src/context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
};

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
    
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/total-waste" element={<ProtectedRoute element={<TotalWaste />} />} />
      <Route path="/demo" element={<ProtectedRoute element={<Demo />} />} />
      <Route path="/real-time-data" element={<ProtectedRoute element={<RealTimeData />} />} />
    </Routes>
  );
};

export default AppRouter;
