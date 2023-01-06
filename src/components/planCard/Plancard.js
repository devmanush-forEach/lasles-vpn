import "./Plancard.css";

import Tick from "../../Assets/tick.svg";
import { useDispatch } from "react-redux";
import { set_puchase_Plan } from "../../redux/actions/plan.actions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../common/firebase/functions";

const Plancard = ({ cardData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    const getImgUrl = async () => {
      const data = await getImageUrl(cardData.icon);
      setImgUrl(data);
    };
    getImgUrl();
  }, []);

  const setPlan = () => {
    dispatch(set_puchase_Plan(cardData));
    navigate("/paymentPage");
  };

  return (
    <div className="plan-card">
      <div className="plan-card-logo">
        <img src={imgUrl} alt="" />
      </div>
      <div className="plan-card-title">{cardData.title}</div>
      <ul className="plan-card-points-list">
        {cardData.features?.map((point, index) => (
          <li className="plan-points" key={`${index}f`}>
            <img alt="" src={Tick} /> {point}
          </li>
        ))}
      </ul>
      <div className="plan-card-bottom">
        <div>
          <span className="card-price">{cardData.price}</span>
          {cardData.price !== "free" && " Rs /mo"}
        </div>
        <button onClick={setPlan} className="outlined-btn">
          Select
        </button>
      </div>
    </div>
  );
};

export default Plancard;
