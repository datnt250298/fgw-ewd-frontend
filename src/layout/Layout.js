import React from "react";
import Body from "../components/Body/Body";
import Content from "../components/Content/Content";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Layout(props) {
  return (
    <div>
      <Header />
      <Body>
        <Sidebar />
        <Content />
      </Body>
    </div>
  );
}
