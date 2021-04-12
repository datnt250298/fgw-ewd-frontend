import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login__container">
      <div className="login__form--wrapper">
        <div className="login__heading">
          FPT <span>CMS</span>
        </div>
        <div className="login__form">
          <div className="login__username">
            <label className="login__label">Email address</label>
            <input
              className="login__input"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="login__password">
            <label className="login__label">Password</label>
            <input
              className="login__input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="login__signin">
            <div href="#" className="forgot__password">
              Forgot Password?
            </div>
            <button className="login__btn-signin" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
