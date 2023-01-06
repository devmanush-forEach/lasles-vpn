import Navbar from "../../../components/navbar/Navbar";
import "./AdminPage.css";
import logo from "../../../Assets/Logo.svg";
import { useState } from "react";
import AddPlanForm from "../AddPlanForm/AddPlanForm";

const AdminPage = () => {
  const [formType, setFormType] = useState("addPlan");

  const updateFormType = (e) => {
    const name = e.target.getAttribute("name");
    setFormType(name);
  };

  return (
    <>
      <Navbar />
      <div className="admin_page_div">
        <div className="admin_left_box">
          <div className="admin_head">
            <img src={logo} alt="logo" />
          </div>
          <ul className="left_admin_list">
            <li
              className={formType === "addPlan" && "active_list_item"}
              name="addPlan"
              onClick={updateFormType}
            >
              Add Plan
            </li>
            <li
              className={formType === "updatePlan" && "active_list_item"}
              name="updatePlan"
              onClick={updateFormType}
            >
              Update Plan
            </li>
            <li
              className={formType === "deletePlan" && "active_list_item"}
              name="deletePlan"
              onClick={updateFormType}
            >
              Delete Plan
            </li>
          </ul>
        </div>
        <div className="admin_right_box">
          <AddPlanForm />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
