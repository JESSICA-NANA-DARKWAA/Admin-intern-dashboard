import React, { useState, useContext } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="dashboard-container">
      <div className="sidebar-container"> </div>
      <nav className="navbar">
        <div className="account-box">
          {isLoggedIn ? (
            <div className="profile-wrapper">
              <img
                src="https://s3-alpha-sig.figma.com/img/48fa/b8ef/fff224d8c627881a0539264d5f61e3da?Expires=1702857600&Signature=hkDntu6cmRtQ88OERovCPBSz4vNTfvGD9K82ry2V6Opzey0XvrNEopgo6h-1E26cztsjl0c8hR~aSdw1SpbwD9~PF2n2Wlc55mYr0lEa2FV3ZWArmzbBk1JxfECtL3KzWblLZGtJFnLsZnfrd36yscgJNdhHihBIqFsW-55BHk6GQTo2LFcVRHY8Nfzu9P6Qw37ymAGC7yMozml75lddi1JnpNW64OeAEAaABeJfKZ7ni8t~YtEN0s82v8-qTOfi96ocIBIe8T04l7gjue5BBKBmDywevP-yUQD5WUNPLQMInZJfD5fndvtoHwKUgvXP5W3X7X7YyAEISr83VlBR7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="profile-image"
              />
              <span>Kelvin</span>
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
