import React from "react";
import Navbar from "../navbar/Navbar";
import "./Layout.css";

const Layout = ({ navbar, children }) => {
  return (
    <div>
      <Navbar />
      {navbar}
      {children}
    </div>
  );
};

export default Layout;
