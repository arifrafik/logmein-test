import React from "react";
import logo from "./../../icon/logo.png";
import "./header.css";

export const Header = props => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-item app-name">
          <img src={logo} className="app-logo" alt={props.appName} />
        </div>
        <div className="header-item-center" />
        <div className="header-item"></div>
      </div>
    </header>
  );
};
