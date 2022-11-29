import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { useEffect, useState } from "react";
import Bars from "../../Assets/Bars.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { getCookie } from "../../middlewares/setCookie";
import axios from "axios";
import { serverurl } from "../../common/constants";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeElement, setActiveElement] = useState("about");
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const changeActiveElement = (ele) => {
    setActiveElement(ele.name);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(`${serverurl}/user`, {
        withCredentials: true,
        credentials: true,
      });
      if (data.status === 200) {
        setUser(data.data.user);
      }
    };
    getData();
  }, []);

  const handleSignout = async () => {
    const res = await axios.post(
      `${serverurl}/signout`,
      {},
      {
        withCredentials: true,
        credentials: true,
      }
    );
    if (res.status === 200) {
      setUser(null);
    }
  };

  console.log(user);
  return (
    <>
      <header className="header">
        <div className="navbar-container">
          <div className="leftNav">
            <HashLink className="link-text" to="#about">
              <img src={Logo} alt="logo" className="nav-logo" />
            </HashLink>
          </div>
          <div className="midNav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <HashLink
                  name="about"
                  className={
                    activeElement === "about"
                      ? "link-text active-link"
                      : "link-text"
                  }
                  to="#about"
                  onClick={(e) => {
                    changeActiveElement(e.target);
                  }}
                >
                  About
                </HashLink>
              </li>
              <li className="nav-list-item">
                <HashLink
                  name="features"
                  className={
                    activeElement === "features"
                      ? "link-text active-link"
                      : "link-text"
                  }
                  to="#features"
                  onClick={(e) => {
                    changeActiveElement(e.target);
                  }}
                >
                  Features
                </HashLink>
              </li>
              <li className="nav-list-item">
                <HashLink
                  name="pricing"
                  className={
                    activeElement === "pricing"
                      ? "link-text active-link"
                      : "link-text"
                  }
                  to="#pricing"
                  onClick={(e) => {
                    changeActiveElement(e.target);
                  }}
                >
                  Pricing
                </HashLink>
              </li>
              <li className="nav-list-item">
                <HashLink
                  name="testimonials"
                  className={
                    activeElement === "testimonials"
                      ? "link-text active-link"
                      : "link-text"
                  }
                  to="#testimonials"
                  onClick={(e) => {
                    changeActiveElement(e.target);
                  }}
                >
                  Testimonials
                </HashLink>
              </li>
              <li className="nav-list-item">
                <HashLink
                  name="footer"
                  className={
                    activeElement === "footer"
                      ? "link-text active-link"
                      : "link-text"
                  }
                  to="#footer"
                  onClick={(e) => {
                    changeActiveElement(e.target);
                  }}
                >
                  Help
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="rightNav">
            {!user ? (
              <>
                <button className="signin-btn">
                  <Link className="link-text" to="/signup">
                    Signup
                  </Link>
                </button>
                <button className="signup-btn">
                  <Link className="link-text" to="/signin">
                    Signin
                  </Link>
                </button>
              </>
            ) : (
              <div className="user_intro_div">
                {user.name}
                <div className="user_box">
                  <ul>
                    <li>
                      <Link className="link-text" to="/profile">
                        View Profile
                      </Link>
                    </li>
                    <li style={{ cursor: "pointer" }} onClick={handleSignout}>
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            )}
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
          <li className="nav-list-item">
            <HashLink className="link-text" to="#about">
              About
            </HashLink>
          </li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            <HashLink className="link-text" to="#features">
              Features
            </HashLink>
          </li>
          <li className="nav-list-item">
            <HashLink className="link-text" to="#pricing">
              Pricing
            </HashLink>
          </li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            <HashLink className="link-text" to="#testimonials">
              Testimonials
            </HashLink>
          </li>
          <li className="nav-list-item">
            <HashLink className="link-text" to="#footer">
              Help
            </HashLink>
          </li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            <Link className="link-text" to="/signin">
              <Link className="link-text" to="/signin">
                Signin
              </Link>
            </Link>
          </li>
          <li className="nav-list-item">
            <Link className="link-text" to="/signup">
              <Link className="link-text" to="/signup">
                Signup
              </Link>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
