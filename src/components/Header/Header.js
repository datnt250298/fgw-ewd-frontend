import React, { useEffect } from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <div className="header__left">
          <div className="header__logo">
            <a href="/">
              <svg
                width={42}
                height={42}
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0467 28.9068L13.2374 10.0504L31.0734 16.1724L13.0467 28.9068Z"
                  stroke="#EBF8FF"
                  strokeWidth={2}
                />
                <path
                  d="M10.7387 25.6398L28.5747 31.7618L28.7654 12.9054L10.7387 25.6398Z"
                  stroke="#EBF8FF"
                  strokeWidth={2}
                />
              </svg>
              <div className="header__left__name">
                FPT <span className="header__name-span">CMS</span>
              </div>
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right__account">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Justin_Bieber_in_Rosemont%2C_Illinois_%282015%29.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
