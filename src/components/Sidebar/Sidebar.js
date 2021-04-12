import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="Sidebar__list">
        <Link to="/manage">Manage</Link>
        <Link to="/submitarticles">
          <FontAwesomeIcon icon={faPenNib} />
          Submit Articles
        </Link>
        <Link to="users">
          <FontAwesomeIcon icon={faUsers} />
          Users
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
