import React from "react";
import "./Body.scss";

const Body = (props) => {
  return <div className="body__container">{props.children}</div>;
};

export default Body;
