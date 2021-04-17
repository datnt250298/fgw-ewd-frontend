import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to="/signin" />;
  } else {
    return <Route {...props} />;
  }
};

export default PrivateRoute;
