import "./Footer.css";
import FooterData from "./FooterData";
import logo from "../../Assets/Logo.svg";
import LaslesVPN from "../../Assets/2020LaslesVPN.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="left">
          <img src={logo} alt="" className="footer-logo" />
          {FooterData.description()}
          <div className="flex">
            <div className="media-container">
              {FooterData.socialMedia?.map((ele, index) => (
                <img src={ele.logo} alt="" width="50px" key={`${index}a`} />
              ))}
            </div>
            <div className="web-year">
              <img src={LaslesVPN} alt="" className="footer-logo" />
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>Product</li>
            {FooterData?.productList?.map((ele, index) => (
              <li key={`${index}b`}>{ele}</li>
            ))}
          </ul>
          <ul>
            <li>Engage</li>
            {FooterData?.engageList?.map((ele, index) => (
              <li key={`${index}c`}>{ele}</li>
            ))}
          </ul>
          <ul>
            <li>Earn Money</li>
            {FooterData?.earnmoneyList?.map((ele, index) => (
              <li key={`${index}d`}>{ele}</li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
