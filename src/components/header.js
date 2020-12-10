import React from "react";
import "../utils/css/header.css";
import logo from "../utils/images/logo.png";
class Header extends React.Component {
  state = { home: true, about: false, explore: false };
  homeActive = () => {
    this.setState({ home: true, about: false, explore: false });
  };
  aboutActive = () => {
    this.setState({ home: false, about: true, explore: false });
  };
  exploreActive = () => {
    this.setState({ home: false, about: false, explore: true });
  };
  render() {
    return (
      <div className="header_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li
              className={this.state.home ? "active" : ""}
              onClick={this.homeActive}
            >
              Home
            </li>
            <li
              className={this.state.about ? "active" : ""}
              onClick={this.aboutActive}
            >
              About Me
            </li>
            <li
              className={this.state.explore ? "active" : ""}
              onClick={this.exploreActive}
            >
              Explore
            </li>

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
