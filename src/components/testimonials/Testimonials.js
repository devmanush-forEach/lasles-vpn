import { Link } from "react-router-dom";
import Slider from "../slider/Slider";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-heading">
        Trusted by Thousand of Happy Customer
      </div>
      <div className="testimonial-description">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </div>
      <Slider />
      <div className="subscribe-container">
        <div className="left">
          <div className="subscribe-heading">
            Subscribe Now for Get Special Features!
          </div>
          <div className="subscribe-description">
            Let's subscribe with us and find the fun.
          </div>
        </div>
        <div className="right">
          <button className="get-start-btn">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/subscribe"
            >
              Subscribe Now
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
