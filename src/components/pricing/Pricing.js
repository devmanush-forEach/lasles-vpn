import "./Pricing.css";
import Plancard from "../planCard/Plancard";
import { useSelector } from "react-redux";

const Pricing = () => {
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
