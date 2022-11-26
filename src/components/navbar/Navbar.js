import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { useState } from "react";
import Bars from "../../Assets/Bars.svg";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <header className="header">
        <div className="navbar-container">
          <div className="leftNav">
            <img src={Logo} alt="logo" className="nav-logo" />
          </div>
          <div className="midNav">
            <ul className="nav-list">
              <li className="nav-list-item">About</li>
              <li className="nav-list-item">Features</li>
              <li className="nav-list-item">Pricing</li>
              <li className="nav-list-item">Testimonials</li>
              <li className="nav-list-item">Help</li>
            </ul>
          </div>
          <div className="rightNav">
            <button className="signin-btn">Sign In</button>
            <button className="signup-btn">Sign Up</button>
          </div>
          <div className="hamburger-icon">
            <img src={Bars} alt="" onClick={toggleMobileMenu} />
          </div>
        </div>
      </header>
      <div
        className="mobile-menu-container"
        style={{ display: showMobileMenu ? "block" : "none" }}
      >
        <ul className="mobile-menu-list">
          <li className="nav-list-item">About</li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            Features
          </li>
          <li className="nav-list-item">Pricing</li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            Testimonials
          </li>
          <li className="nav-list-item">Help</li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            Signin
          </li>
          <li className="nav-list-item">Signup</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
