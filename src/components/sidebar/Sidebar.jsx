import React from "react";
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <p>INTRN</p>
          <li className="nav-item">
            <MdOutlineDashboard />

            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <MdPeopleAlt />

            <Link to="/interns" className="nav-link">
              interns
            </Link>
          </li>

          <li className="nav-item">
            <FaFile />

            <Link to="/assessment" className="nav-link">
              Assessment
            </Link>
          </li>
          <Link to="/" className="logout-btn">
            <FaSignOutAlt /> Sign out
          </Link>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <div className="user-profile">{/* User profile content */}</div>
    </div>
  );
}

export default Sidebar;
