import "./Pricing.css";
import PlansData from "./PlansData";
import Plancard from "../planCard/Plancard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_Plans } from "../../redux/actions/plan.actions";

const Pricing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_Plans());
  }, []);
  const { plans } = useSelector((state) => state.plan);

  return (
    <>
      <section className="pricing-section" id="pricing">
        <div className="pricing-heading">Choose Your Plan</div>
        <div className="pricing-description">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
        <div className="pricing-cards">
          {plans?.map((cardData, index) => (
            <Plancard cardData={cardData} key={`${index}g`} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
