import "./About.css";
import aboutLogo from "../../Assets/About-icon.svg";
import UserRedIcon from "../../Assets/User-red.svg";
import LocationRedIcon from "../../Assets/Red-location-icon.svg";
import OptionIcon from "../../Assets/Option-icon.svg";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="left-part">
          <div className="about-heading">
            Want anything to be easy with{" "}
            <span className="head-name">LaslesVPN</span>.
          </div>
          <div className="about-description">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="name">LaslesVPN</span> discover interesting
            features from us.
          </div>
          <button className="get-start-btn">Get Started</button>
        </div>
        <div className="right-part">
          <img src={aboutLogo} alt="about-logo" width="100%" />
        </div>
        <div className="about-bottom">
          <div className="about--bottom-cards border-right">
            <div className="bottom-card-container">
              <div className="bottom-icon-div">
                <img alt="" src={UserRedIcon} />
              </div>
              <div className="bottom-card-text">
                <div className="card-number">90+</div>
                <div className="card-text">Users</div>
              </div>
            </div>
          </div>
          <div className="about--bottom-cards">
            <div className="bottom-card-container">
              <div className="bottom-icon-div">
                <img alt="" src={LocationRedIcon} />
              </div>
              <div className="bottom-card-text">
                <div className="card-number">30+</div>
                <div className="card-text">Locations</div>
              </div>
            </div>
          </div>
          <div className="about--bottom-cards border-left">
            <div className="bottom-card-container">
              <div className="bottom-icon-div">
                <img alt="" src={OptionIcon} />
              </div>
              <div className="bottom-card-text">
                <div className="card-number">50+</div>
                <div className="card-text">Servers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
