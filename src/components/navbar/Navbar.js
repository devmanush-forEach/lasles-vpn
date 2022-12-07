import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { useEffect, useState } from "react";
import Bars from "../../Assets/Bars.svg";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { axiosGet, axiosPost } from "../../common/axiosRequests";
import { useDispatch, useSelector } from "react-redux";
import { set_User } from "../../redux/actions/user.actions";
import { show_Notification } from "../../redux/actions/notificationBar.actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeElement, setActiveElement] = useState("about");

  const { user } = useSelector((state) => state.user);

  const profile = user?.profile;
  console.log(profile);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const changeActiveElement = (ele) => {
    setActiveElement(ele.name);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axiosGet("/user");
      if (data.status === 200) {
        dispatch(set_User(data.data.user));
      } else {
        dispatch(
          show_Notification({
            message: "Forbidden user Please Login.",
            isError: true,
          })
        );
      }
    };
    getData();
  }, []);

  const handleSignout = async () => {
    const res = await axiosPost("/signout", {});

    if (res.status === 200) {
      dispatch(set_User(null));
      dispatch(show_Notification({ message: "Logged out successfully!!" }));
    } else {
      dispatch(
        show_Notification({ message: "ERR_CONNECTION_REFUSED", isError: true })
      );
    }
    navigate("/");
    setShowMobileMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="navbar-container">
          <div className="leftNav">
            <Link to="/">
              <img src={Logo} alt="logo" className="nav-logo" />
            </Link>
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
                  to="/#about"
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
                  to="/#features"
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
                  to="/#pricing"
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
                  to="/#testimonials"
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
                  to="/#footer"
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
                {/* <img
                  src={profile}
                  alt=""
                  // height="30px"
                  className="navbar_profile_image"
                /> */}
                {user.name}
                <div className="user_box">
                  <ul>
                    <li>
                      <Link className="link-text" to="/adminPage">
                        Admin Page
                      </Link>
                    </li>
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
            {user && <div>{user.name}</div>}
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
            <HashLink className="link-text" to="/#about">
              About
            </HashLink>
          </li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            <HashLink className="link-text" to="/#features">
              Features
            </HashLink>
          </li>
          <li className="nav-list-item">
            <HashLink className="link-text" to="/#pricing">
              Pricing
            </HashLink>
          </li>
          <li
            className="nav-list-item"
            style={{ background: "white", color: "rgb(245,56,56)" }}
          >
            <HashLink className="link-text" to="/#testimonials">
              Testimonials
            </HashLink>
          </li>
          <li className="nav-list-item">
            <HashLink className="link-text" to="/#footer">
              Help
            </HashLink>
          </li>
          {user ? (
            <>
              <li className="nav-list-item">
                <Link className="link-text" to="/adminPage">
                  Admin Page
                </Link>
              </li>
              <li
                className="nav-list-item"
                style={{ background: "white", color: "rgb(245,56,56)" }}
              >
                <Link className="link-text" to="/profile">
                  View Profile
                </Link>
              </li>
              <li className="nav-list-item" onClick={handleSignout}>
                Signout
              </li>
            </>
          ) : (
            <>
              <li
                className="nav-list-item"
                style={{ background: "white", color: "rgb(245,56,56)" }}
              >
                <Link className="link-text" to="/signin">
                  Signin
                </Link>
              </li>
              <li className="nav-list-item">
                <Link className="link-text" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
