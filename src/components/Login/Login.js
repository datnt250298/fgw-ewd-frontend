import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { useHistory } from "react-router";

export default function Login() {
  const history = useHistory();
  const [loginCredential, setLoginCredential] = useState({
    emailInput: "",
    passwordInput: "",
  });

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginCredential);

    // actions to handle validate email, password & calling api to validate login credential from backend
    history.push("/");
  };

  const handleEmailChange = (e) => {
    setLoginCredential({ ...loginCredential, emailInput: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setLoginCredential({ ...loginCredential, passwordInput: e.target.value });
  };

  return (
    <div className="login__container">
      <div className="login__form--wrapper">
        <div className="login__heading">
          FPT <span>CMS</span>
        </div>
        <form onSubmit={handleSubmitLogin} className="login__form">
          <div className="login__username">
            <label className="login__label">
              <FontAwesomeIcon icon={faLock} />
              Email address
            </label>
            <input
              className="login__input"
              type="email"
              required
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="login__password">
            <label className="login__label">
              <FontAwesomeIcon icon={faEnvelope} />
              Password
            </label>
            <input
              className="login__input"
              type="password"
              required
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="login__signin">
            <div href="#" className="forgot__password">
              Forgot password?
            </div>
            <button className="login__btn-signin" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
