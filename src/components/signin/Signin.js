import { useState } from "react";
import "./Signin.css";
import axios from "axios";
import { setCookie } from "../../middlewares/setCookie";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [isError, setIsError] = useState(false);
  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: res } = await axios.post(
      "https://lasles-vpn-server.herokuapp.com/signin",
      data,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    if (res.token) {
      navigate("/");
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <div className="signin-box">
        <form className="signin-form" onSubmit={handleSubmit}>
          <span className="singnin-welcome">Welcome Back </span>
          <div className="input-group">
            {/* <label for="email">Email</label> */}
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type="text"
              name="email"
              required
              value={data.email}
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            {/* <label for="password">Password</label> */}
            <input
              className="input-field"
              onChange={(e) => {
                updateData(e);
              }}
              type="password"
              name="password"
              required
              value={data.password}
              placeholder="Password"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="form-submit-btn get-start-btn"
          >
            Login
          </button>
        </form>
        {/* {isError && */}
        <div>Invalid User Creadentials</div>
        {/* // } */}
      </div>
    </>
  );
};

export default Signin;
