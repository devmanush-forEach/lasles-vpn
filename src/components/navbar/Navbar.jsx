import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";
import { useEffect, useState } from "react";
import Bars from "../../Assets/Bars.svg";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { get_User, set_User } from "../../redux/actions/user.actions";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import { get_Plans } from "../../redux/actions/plan.actions";
import { getImageUrl } from "../../common/firebase/functions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeElement, setActiveElement] = useState("about");
  const [profileUrl, setProfileUrl] = useState(
    "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png"
  );
  const [admin, setAdmin] = useState(false);
  const { user } = useSelector((state) => state.user);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log("working fine");
  };

  const changeActiveElement = (ele) => {
    setActiveElement(ele.name);
  };

  useEffect(() => {
    dispatch(get_User());
    dispatch(get_Plans());
  }, []);

  useEffect(() => {
    const getUrl = async () => {
      const url = await getImageUrl(user?.profile);
      setProfileUrl(url);
    };
    getUrl();
    setAdmin(user?.isAdmin);
  }, [user]);

  const hideMobilemenu = () => {
    setShowMobileMenu(false);
  };

  const handleSignout = async () => {
    localStorage.removeItem("jwt_token");
    dispatch(show_Notification({ message: "Logged out successfully!!" }));
    dispatch(set_User(null));
    navigate("/");
    setShowMobileMenu(false);
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("mousedown", ({ target }) => {
      if (
        !document?.getElementById("mobile_menu_container")?.contains(target) &&
        target.id !== "hamburger"
      ) {
        hideMobilemenu();
      }
    });
  }, []);

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
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
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
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
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
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
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
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
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
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
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
                {user.name.split(" ")[0]}
                <img
                  src={profileUrl}
                  alt="aly"
                  height="30px"
                  className="navbar_profile_image"
                />
                <div className="user_box">
                  <ul>
                    {admin && (
                      <li>
                        <Link className="link-text" to="/adminPage">
                          Admin Page
                        </Link>
                      </li>
                    )}
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
            {user && <div>{user.name.split(" ")[0]}</div>}
            <img src={Bars} alt="" id="hamburger" onClick={toggleMobileMenu} />
          </div>
        </div>
      </header>
      {showMobileMenu && (
        <div className="mobile-menu-container" id="mobile_menu_container">
          <ul className="mobile-menu-list">
            <li className="nav-list-item">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                className="link-text "
                onClick={hideMobilemenu}
                to="/#about"
              >
                About
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                className="link-text "
                onClick={hideMobilemenu}
                to="/#features"
              >
                Features
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                className="link-text "
                onClick={hideMobilemenu}
                to="/#pricing"
              >
                Pricing
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                className="link-text "
                onClick={hideMobilemenu}
                to="/#testimonials"
              >
                Testimonials
              </HashLink>
            </li>
            <li className="nav-list-item">
              <HashLink
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                className="link-text "
                onClick={hideMobilemenu}
                to="/#footer"
              >
                Help
              </HashLink>
            </li>
            {user ? (
              <>
                {admin && (
                  <li className="nav-list-item">
                    <Link
                      className="link-text "
                      onClick={hideMobilemenu}
                      to="/adminPage"
                    >
                      Admin Page
                    </Link>
                  </li>
                )}
                <li
                  className="nav-list-item"
                  style={{
                    background: !admin && "white",
                    color: !admin && "rgb(245,56,56)",
                  }}
                >
                  <Link
                    className="link-text "
                    onClick={hideMobilemenu}
                    to="/profile"
                  >
                    View Profile
                  </Link>
                </li>
                <li className="nav-list-item" onClick={handleSignout}>
                  Signout
                </li>
              </>
            ) : (
              <>
                <li className="nav-list-item">
                  <Link
                    className="link-text "
                    onClick={hideMobilemenu}
                    to="/signin"
                  >
                    Signin
                  </Link>
                </li>
                <li className="nav-list-item">
                  <Link
                    className="link-text "
                    onClick={hideMobilemenu}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
