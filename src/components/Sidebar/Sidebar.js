import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <div className="sidebar__list--items">
          <NavLink
            to="dashboard"
            activeClassName="sidebar__list--items--active"
          >
            <FontAwesomeIcon icon={faPenNib} />
            Dashboard
          </NavLink>
        </div>
        <div className="sidebar__list--items">
          <NavLink to="users" activeClassName="sidebar__list--items--active">
            <FontAwesomeIcon icon={faUsers} />
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
