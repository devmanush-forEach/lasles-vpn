import "./SubscribePage.css";
import Navbar from "../navbar/Navbar";
import PlansData from "../pricing/PlansData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set_Plan } from "../../redux/actions/plan.actions";

const SubscribePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState("Free");

  const setPlan = () => {
    const plan = PlansData.filter((ele) => {
      return ele.title === activePlan;
    });

    if (plan.length) {
      dispatch(set_Plan(plan[0]));
      navigate("/paymentPage");
    }
  };

  return (
    <>
      <Navbar />
      <section className="subscribe_page">
        <div className="subscribe_box">
          <div className="subscribe_heading">
            Choose the plan that's right for you
          </div>
          <div className="subscribe_plans_box">
            <table className="plan_table">
              <thead className="plan_table_head">
                {PlansData.map((ele, index) => (
                  <div
                    style={{ cursor: "pointer" }}
                    key={ele.title + ele.price + "a"}
                    className={
                      activePlan === ele.title
                        ? "plan_square_box active_plan_square"
                        : "plan_square_box"
                    }
                    onClick={() => {
                      setActivePlan(ele.title);
                    }}
                  >
                    {ele.title}
                  </div>
                ))}
              </thead>
              <tbody className="plan_table_body">
                <tr className="subscribe_plan_row">
                  <div>Price</div>
                  {PlansData.map((ele, index) => (
                    <div
                      style={{ cursor: "pointer" }}
                      key={ele.title + ele.price + "b"}
                      onClick={() => {
                        setActivePlan(ele.title);
                      }}
                      className={activePlan === ele.title && "color_orange"}
                    >
                      {ele.price}
                      <span>{ele.price !== "Free" && "/mo"}</span>
                    </div>
                  ))}
                </tr>
                <tr className="subscribe_plan_row">
                  <div>Network Quality</div>
                  {PlansData.map((ele, index) => (
                    <div
                      style={{ cursor: "pointer" }}
                      key={ele.title + ele.price + "c"}
                      onClick={() => {
                        setActivePlan(ele.title);
                      }}
                      className={activePlan === ele.title && "color_orange"}
                    >
                      {ele.quality}
                    </div>
                  ))}
                </tr>
                <tr className="subscribe_plan_row">
                  <div className="plan_feature_heading">Features</div>
                  {PlansData.map((ele, index) => {
                    return (
                      <div
                        style={{ cursor: "pointer" }}
                        className="plan_features_box"
                        key={`${index}n`}
                        onClick={() => {
                          setActivePlan(ele.title);
                        }}
                      >
                        <ul className="plan_feature_list">
                          {ele.points.map((point, index) => (
                            <li
                              className={
                                activePlan === ele.title && "color_orange"
                              }
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="next_btn_div">
            <button className="get-start-btn" onClick={setPlan}>
              GO TO PAYMENT METHODS
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribePage;
