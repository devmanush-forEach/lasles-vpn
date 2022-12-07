import { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { useDispatch } from "react-redux";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../navbar/Navbar";
import ImageUpload from "../ImageUpload/ImageUpload";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: res } = await axiosPost("/signin", data);

    if (res.token) {
      navigate("/");
      dispatch(show_Notification({ message: "Login Successfull!!" }));
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
        <form className="signin-form" onSubmit={handleSubmit}>
          <span className="singnin-welcome">Welcome Back </span>
          <div className="input-group">
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type="text"
              name="email"
              required="required"
              value={data.email}
            />
            <label htmlFor="email" className="label">
              Email
            </label>
          </div>
          <div className="input-group">
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type="password"
              name="password"
              required="required"
              value={data.password}
            />
            <label htmlFor="password" className="label">
              Password
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="form-submit-btn get-start-btn"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
