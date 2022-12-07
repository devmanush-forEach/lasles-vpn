import "./Plancard.css";

import Tick from "../../Assets/tick.svg";
import { useDispatch } from "react-redux";
import { set_Plan } from "../../redux/actions/plan.actions";
import { useNavigate } from "react-router-dom";

const Plancard = ({ cardData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setPlan = () => {
    dispatch(set_Plan(cardData));
    navigate("/paymentPage");
  };
  return (
    <div className="plan-card">
      <div className="plan-card-logo">
        <img src={cardData.icon} alt="" />
      </div>
      <div className="plan-card-title">{cardData.title} Plan</div>
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
        <button onClick={setPlan} className="outlined-btn">
          Select
        </button>
      </div>
    </div>
  );
};

export default Plancard;
