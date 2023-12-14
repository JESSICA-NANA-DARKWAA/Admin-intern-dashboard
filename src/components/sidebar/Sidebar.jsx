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
          <li className="sidebar-link">
            <MdOutlineDashboard />
            <Link to="/dashboard" className="Dash-btn">
              Dashboard
            </Link>
          </li>
          <li className="sidebar-link">
            <MdPeopleAlt />
            <Link to="/interns" className="intern-btn">
              Intern
            </Link>
          </li>
          <li className="sidebar-link">
            <FaFile />
            <Link to="/assessment" className="Dash-btn">
              Assessment
            </Link>
          </li>
          <Link className="logout-btn">
            <FaSignOutAlt /> Sign out
          </Link>
        </ul>
      </nav>
      <div className="user-profile"></div>
    </div>
  );
}

export default Sidebar;
