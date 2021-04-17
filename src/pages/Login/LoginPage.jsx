import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../app/store/auth/authSlice";
import Login from "../../components/Login/Login";

export default function LoginPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(loginSuccess());
    }
    return () => {};
  }, [dispatch]);
  return <Login />;
}
