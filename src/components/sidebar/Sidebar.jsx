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
          <li>
            <MdOutlineDashboard />
            <Link to="/dashboard" className="Dash-btn">
               Dashboard
            </Link>
          </li>
          <li>
            <MdPeopleAlt />
            <Link to="/interns" className="intern-btn">
               intern
            </Link>
          </li>
          <li>
            <FaFile />

            <Link to="/assessment" className="Dash-btn">
               assessment
            </Link>
          </li>
          <div className="logout-btn">
            <FaSignOutAlt /> Sign out
          </div>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
      <div className="user-profile">{/* User profile content */}</div>
    </div>
  );
}

export default Sidebar;
