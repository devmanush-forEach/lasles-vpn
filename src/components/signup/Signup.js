import "./Signup.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../navbar/Navbar";
import ImageUpload from "../ImageUpload/ImageUpload";
import getFormData from "../../common/getFormData";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    profile: null,
  });

  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(data);
    const res = await axiosPost("/signup", formData);

    if (res.status === 201) {
      dispatch(show_Notification({ message: "User registered Successfully." }));
      navigate("/");
    } else {
      dispatch(
        show_Notification({ message: "ERR_CONNECTION_REFUSED", isError: true })
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-box">
        <form className="signup_form">
          <div>
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type=""
              name="name"
              value={data.name}
              required="required"
            />
            <label htmlFor="name" className="label">
              name
            </label>
          </div>
          <div>
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type=""
              name="email"
              value={data.email}
              required="required"
            />
            <label htmlFor="email" className="label">
              email
            </label>
          </div>
          <div>
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type=""
              name="phone"
              value={data.phone}
              required="required"
            />
            <label htmlFor="phone" className="label">
              phone
            </label>
          </div>
          <div>
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type="password"
              name="password"
              value={data.password}
              required="required"
            />
            <label htmlFor="password" className="label">
              password
            </label>
          </div>
          <div className="profile_upload_box">
            Upload Your Profile Pic
            <ImageUpload
              onSelected={(file) => {
                setData({ ...data, profile: file });
              }}
              onRemove={() => {
                setData({ ...data, profile: null });
              }}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="form-submit-btn get-start-btn"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
