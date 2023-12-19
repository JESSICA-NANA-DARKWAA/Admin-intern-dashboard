import React, { useState, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="dashboard-container">
      <div className="sidebar-container"> </div>
      <nav className="navbar">
        <div className="account-box">
          {isLoggedIn ? (
            <div className="profile-wrapper">
              <img
                src="https://images.unsplash.com/photo-1613005798967-632017e477c8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="profile-image"
              />
              <span>Kelvin </span>

              <IoMdArrowDropdown />
            </div>
          ) : (
            <div className="login-signup-wrapper">
              <Link to="/login" className="login-btn">
                Login
              </Link>
              <Link to="/signup" className="signup-btn">
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
