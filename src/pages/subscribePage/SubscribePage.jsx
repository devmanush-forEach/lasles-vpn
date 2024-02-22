import "./SubscribePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set_puchase_Plan } from "../../redux/actions/plan.actions";
import { show_Notification } from "../../redux/actions/notificationBar.actions";

const SubscribePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plans } = useSelector((state) => state.plan);
  const [activePlan, setActivePlan] = useState(0);

  const { user } = useSelector((state) => state.user);

  const setPlan = () => {
    dispatch(set_puchase_Plan(plans[activePlan]));
    if (!user) {
      navigate("/signin");
      dispatch(
        show_Notification({
          message: "Before subscribe any plan. Please Login !!",
          isError: true,
        })
      );
    } else {
      navigate("/paymentPage");
    }
  };

  return (
    <>
      <section className="subscribe_page">
        <div className="subscribe_box">
          <div className="subscribe_heading">
            Choose the plan that's right for you
          </div>
          <div className="subscribe_plans_box">
            <table className="plan_table">
              <thead className="plan_table_head">
                {plans?.map((ele, index) => {
                  const title = ele.title.split(" ")[0];

                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      key={ele.title + ele.price + "a"}
                      className={
                        activePlan === index
                          ? "plan_square_box active_plan_square"
                          : "plan_square_box"
                      }
                      onClick={() => {
                        setActivePlan(index);
                      }}
                    >
                      {title}
                    </div>
                  );
                })}
              </thead>
              <tbody className="plan_table_body">
                <tr className="subscribe_plan_row">
                  <div>Price</div>
                  {plans?.map((ele, index) => (
                    <div
                      style={{ cursor: "pointer" }}
                      key={ele.title + ele.price + "b"}
                      onClick={() => {
                        setActivePlan(ele.title);
                      }}
                      className={activePlan === ele.title && "color_orange"}
                    >
                      {ele.price}
                      <span>{ele.price.toLowerCase() !== "free" && " Rs/mo"}</span>
                    </div>
                  ))}
                </tr>
                <tr className="subscribe_plan_row">
                  <div>Network Quality</div>
                  {plans?.map((ele, index) => (
                    <div
                      style={{ cursor: "pointer", textTransform: "capitalize" }}
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
                  {plans?.map((ele, index) => {
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
                          {ele.features.map((point, index) => (
                            <li
                              style={{ textTransform: "capitalize" }}
                              className={
                                activePlan === ele.title ? "color_orange" : ''
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
