import "./Signup.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../navbar/Navbar";
import ImageUpload from "../ImageUpload/ImageUpload";
import getFormData from "../../common/getFormData";
import signupImage from "../../Assets/signup.jpg";

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
      <div className="signup-box">
        <div>
          <img src={signupImage} alt="" width="100%" height="100%" />
        </div>
        <div>
          <form className="signup_form" autoComplete="off">
            <span className="singnin-welcome">Welcome</span>
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
              type="submit"
              onClick={handleSubmit}
              className="form-submit-btn get-start-btn"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
