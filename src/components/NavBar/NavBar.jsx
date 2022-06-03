import React from "react";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav id="NavBar" className="navbar navbar-expand-lg ">
        <div className="logo-text">
          <img
            className="logo"
            src={require("../../Data/whatsapp-logo.png")}
            alt="logo"
          />

          <p className="navbar-brand text-light">WHATSAPP WEB</p>
        </div>
      </nav>
    );
  }
}

export default NavBar;
