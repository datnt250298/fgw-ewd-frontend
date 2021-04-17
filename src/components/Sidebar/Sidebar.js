import React, { useEffect } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navigateTo } from "../../app/store/content/contentSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const pageToShow = location.pathname.substring(1);

  useEffect(() => {
    dispatch(navigateTo(pageToShow));
    return () => {};
  });
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <div className="sidebar__list--items">
          <NavLink
            to="dashboard"
            activeClassName="sidebar__list--items--active"
            onClick={() => dispatch(navigateTo(pageToShow))}
          >
            <FontAwesomeIcon icon={faPenNib} />
            Dashboard
          </NavLink>
        </div>
        <div className="sidebar__list--items">
          <NavLink
            to="users"
            activeClassName="sidebar__list--items--active"
            onClick={() => dispatch(navigateTo(pageToShow))}
          >
            <FontAwesomeIcon icon={faUsers} />
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
