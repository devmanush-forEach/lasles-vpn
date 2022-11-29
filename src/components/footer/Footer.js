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
              {FooterData.socialMedia?.map((ele) => (
                <img src={ele.logo} alt="" width="50px" />
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
            {FooterData?.productList?.map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
          <ul>
            <li>Engage</li>
            {FooterData?.engageList?.map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
          <ul>
            <li>Earn Money</li>
            {FooterData?.earnmoneyList?.map((ele) => (
              <li>{ele}</li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
