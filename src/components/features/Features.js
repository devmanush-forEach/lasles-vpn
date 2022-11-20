import "./Features.css";
import GreenTick from "../../Assets/Green-tick.svg";

import FeaturesIcon from "../../Assets/Features-icon.svg";
const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-left-part">
          <img alt="" src={FeaturesIcon} width="100%" />
        </div>
        <div className="features-right-part">
          <div className="features-heading">
            {" "}
            We Provide Many Features You Can Use
          </div>
          <div className="features-description">
            You can explore the features that we provide with fun and their own
            functions each featue.
          </div>
          <div className="features-list">
            <ul className="features-list">
              <li className="features-list-Item">
                <img alt="" src={GreenTick} />
                Powerfull online protection.
              </li>
              <li className="features-list-Item">
                <img alt="" src={GreenTick} />
                Internet without borders.
              </li>
              <li className="features-list-Item">
                <img alt="" src={GreenTick} />
                Supercharged VPN
              </li>
              <li className="features-list-Item">
                <img alt="" src={GreenTick} />
                No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
