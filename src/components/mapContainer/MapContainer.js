import "./MapContainer.css";

import Global from "../../Assets/HugeGlobal.svg";
import Logos from "./Logos";

const MapContainer = () => {
  return (
    <>
      <section className="mapSection" id="map-container">
        <div className="map-heading">Huge Global Network of Fast VPN</div>
        <div className="map-description">
          See <span>LaslesVPN</span> everywhere to make it easier for you when
          you move locations.
        </div>
        <div className="map-div">
          <img src={Global} alt="" width="100%" />
        </div>
        <div className="logos-container">
          {Logos.map((logo, index) => (
            <img alt="" src={logo} className="logoImg" key={`${index}e`} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MapContainer;
