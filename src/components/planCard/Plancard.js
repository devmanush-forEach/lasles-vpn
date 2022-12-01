import "./Plancard.css";

import Tick from "../../Assets/tick.svg";

const Plancard = ({ cardData }) => {
  return (
    <div className="plan-card">
      <div className="plan-card-logo">
        <img src={cardData.icon} alt="" />
      </div>
      <div className="plan-card-title">{cardData.title}</div>
      <ul className="plan-card-points-list">
        {cardData.points?.map((point, index) => (
          <li className="plan-points" key={`${index}f`}>
            <img alt="" src={Tick} /> {point}
          </li>
        ))}
      </ul>
      <div className="plan-card-bottom">
        <div>
          <span className="card-price">{cardData.price}</span>
          {cardData.price !== "Free" && " / mo"}
        </div>
        <button className="outlined-btn">Select</button>
      </div>
    </div>
  );
};

export default Plancard;
