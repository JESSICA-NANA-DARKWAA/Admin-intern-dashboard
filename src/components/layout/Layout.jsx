import React from "react";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div>
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default Layout;
