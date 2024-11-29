import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>D7 Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" activeClassName="active">
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink to="/customers" activeClassName="active">
              Customers
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
