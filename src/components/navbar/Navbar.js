import "./Navbar.css";
import Logo from "../../Assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="navbar-container">
          <div className="leftNav">
            <img src={Logo} alt="logo" width="180px" />
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
