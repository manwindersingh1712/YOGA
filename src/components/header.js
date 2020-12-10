import React from "react";
import "../utils/css/header.css";
import logo from "../utils/images/logo.png";
class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Explore</li>

            <a href="">
              <i class="fab fa-instagram"></i>
            </a>

            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i class="far fa-envelope"></i>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
