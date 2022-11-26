import fbLogo from "../../Assets/Facebook.svg";
import twitterLogo from "../../Assets/Twitter.svg";
import instaLogo from "../../Assets/Instagram.svg";

const FooterData = {
  socialMedia: [
    {
      name: "facebook",
      link: "",
      logo: fbLogo,
    },
    {
      name: "twitter",
      link: "",
      logo: twitterLogo,
    },
    {
      name: "instagram",
      link: "",
      logo: instaLogo,
    },
  ],
  description: () => (
    <div className="footer-description">
      <span>LaslesVPN</span> is a private virtual network that has unique
      features and has high security.
    </div>
  ),
  productList: [
    "download",
    "pricing",
    "locations",
    "server",
    "countries",
    "blog",
  ],
  engageList: [
    "laslesVPN ?",
    "FAQ",
    "tutorials",
    "about us",
    "privacy policy",
    "terms of service",
  ],
  earnmoneyList: ["affiliate", "become partner"],
};

export default FooterData;
