import "./Pricing.css";
import PlansData from "./PlansData";
import Plancard from "../planCard/Plancard";

const Pricing = () => {
  return (
    <>
      <section className="pricing-section" id="pricing">
        <div className="pricing-heading">Choose Your Plan</div>
        <div className="pricing-description">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
        <div className="pricing-cards">
          {PlansData?.map((cardData) => (
            <Plancard cardData={cardData} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
