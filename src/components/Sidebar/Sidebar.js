import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <Link to="/submitarticles">
          <FontAwesomeIcon icon={faPenNib} />
          Dashboard
        </Link>
        <Link to="users">
          <FontAwesomeIcon icon={faUsers} />
          Users
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
