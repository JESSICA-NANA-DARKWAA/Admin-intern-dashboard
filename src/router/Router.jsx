import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "../pages/loginpage/Loginpage";
import Interns from "../pages/Interns/Interns";
import Assessment from "../pages/Assesment/Assessment";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interns" element={<Interns />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
