import React from "react";
import Navbar from "../navbar/Navbar";
import "./Layout.css";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ navbar, children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <Navbar />
      {navbar}
      {children}
    </div>
  );
};

export default Layout;
