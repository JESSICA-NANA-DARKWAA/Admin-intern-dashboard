import React from "react";
import "./Sidebar.css";
import { MdOutlineDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaFile } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <p>INTRN</p>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li>
            <MdPeopleAlt />
            Interns
          </li>
          <li>
            <FaFile />
            Assesement
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
