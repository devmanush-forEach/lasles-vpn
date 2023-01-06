import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosPost } from "../../../common/axiosRequests";
import { uploadImage } from "../../../common/firebase/functions";
import ImageUpload from "../../../components/ImageUpload/ImageUpload";
import { show_Notification } from "../../../redux/actions/notificationBar.actions";
import "./AddPlanForm.css";

const AddPlanForm = () => {
  const dispatch = useDispatch();
  const [plan, setPlan] = useState({
    title: "",
    price: "",
    features: [],
    quality: "",
    icon: "",
  });

  const updatePlanValue = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setPlan({ ...plan, [name]: value });
  };

  const updateFeatures = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const index = +name[name.length - 1];
    const updated = [...plan.features];
    updated[index] = e.target.value;

    setPlan({ ...plan, features: updated });
  };

  const addFeature = () => {
    setPlan({ ...plan, features: [...plan.features, ""] });
  };

  const removeFeature = (e) => {
    e.preventDefault();
    const index = e.target.getAttribute("index");
    const prevFeatures = [...plan.features];
    prevFeatures.splice(index, 1);
    setPlan({ ...plan, features: prevFeatures });
  };

  const handleAddPlan = async (e) => {
    try {
      e.preventDefault();

      const res = await uploadImage(plan.icon);

      const toCreate = {
        title: plan.title,
        price: plan.price,
        features: plan.features,
        quality: plan.quality,
        icon: res,
      };

      const response = await axiosPost("/plan", toCreate);
      if (response.status === 201) {
        dispatch(show_Notification({ message: "Plan added Successfully." }));
        setPlan({
          title: "",
          price: "",
          features: [],
          quality: "",
          icon: "",
        });
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="add_plan_form_box">
        <form className="plan_form">
          <div style={{ height: "40px" }}>
            <input
              type="text"
              name="title"
              value={plan.title}
              onChange={updatePlanValue}
              className="plan_input"
              required="required"
            />
            <label htmlFor="title" className="label">
              Title
            </label>
          </div>
          <div style={{ height: "40px" }}>
            <input
              type="text"
              name="price"
              value={plan.price}
              onChange={updatePlanValue}
              className="plan_input"
              required="required"
            />
            <label htmlFor="price" className="label">
              Price
            </label>
          </div>
          <div
            className={
              plan.features.length === 0 ? "no_feature_div" : "features_div"
            }
          >
            <div
              className={
                plan.features.length === 0
                  ? "no_features_label feature_label"
                  : "feature_label"
              }
            >
              Features
            </div>
            <div className="feature_input_outer">
              {plan.features.map((ele, index) => (
                <div className="features_input_box">
                  <input
                    placeholder="Feature"
                    className="plan_features_input plan_input"
                    type="text"
                    name={`feature${index}`}
                    value={plan.features[index]}
                    onChange={updateFeatures}
                    required="required"
                  />
                  <button
                    className="removeButton"
                    type="button"
                    index={index}
                    onClick={removeFeature}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="feature_add_btn_div">
              <button className="addButton" type="button" onClick={addFeature}>
                Add
              </button>
            </div>
          </div>
          <div style={{ height: "40px" }}>
            <input
              type="text"
              name="quality"
              value={plan.quality}
              onChange={updatePlanValue}
              className="plan_input"
              required="required"
            />
            <label htmlFor="quality" className="label">
              Network Quality
            </label>
          </div>
          <div className="image_uploader_box">
            <ImageUpload
              onSelected={(file) => {
                setPlan({ ...plan, icon: file });
              }}
              onRemove={() => {
                setPlan({ ...plan, icon: null });
              }}
            />
          </div>
          <div className="add_plan_sbmt_btn_div">
            <button
              className="get-start-btn"
              type="submit"
              onClick={handleAddPlan}
            >
              Add Plan
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPlanForm;
