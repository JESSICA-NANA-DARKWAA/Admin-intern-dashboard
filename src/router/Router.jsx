import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginpage from "../pages/loginpage/Loginpage";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
