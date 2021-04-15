import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <div className="sidebar__list--items">
          <Link to="/submitarticles">
            <FontAwesomeIcon icon={faPenNib} />
            Dashboard
          </Link>
        </div>
        <div className="sidebar__list--items">
          <Link to="users">
            <FontAwesomeIcon icon={faUsers} />
            Users
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
