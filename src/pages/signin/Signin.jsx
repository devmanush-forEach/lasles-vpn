import { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { useDispatch } from "react-redux";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import signinImage from "../../Assets/signin.png";
import { Link } from "react-router-dom";

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
    const {
      data: { token },
    } = await axiosPost("/signin", data);

    if (token) {
      navigate("/");
      localStorage.setItem("jwt_token", token);
      dispatch(show_Notification({ message: "Login Successfull!!" }));
      window.location.reload();
    } else {
      dispatch(
        show_Notification({ message: "ERR_CONNECTION_REFUSED", isError: true })
      );
    }
  };
  return (
    <>
      <div className="signin-box">
        <div>
          <img src={signinImage} alt="" width="100%" height="100%" />
        </div>
        <div>
          <form
            className="signin-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
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
                autoComplete="off"
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
                autoComplete="off"
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
          <div className="signin_signup_link_box">
            <div>
              Don't have an account. Please{" "}
              <Link to="/signup" className="link">
                Signup
              </Link>
            </div>
            <div>
              Forgot your password. Please
              <Link to="/signup" className="link">
                Reset Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
