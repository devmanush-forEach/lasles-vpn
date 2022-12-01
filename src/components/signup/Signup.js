import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import Navbar from "../navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    console.log(ele.name);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axiosPost("/signup", data);

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
        <form className="signin-form">
          <input
            className="input-field"
            onChange={(e) => {
              updateData(e);
            }}
            type=""
            name="name"
            value={data.name}
            placeholder="Name"
          />
          <input
            className="input-field"
            onChange={(e) => {
              updateData(e);
            }}
            type=""
            name="email"
            value={data.email}
            placeholder="Email"
          />
          <input
            className="input-field"
            onChange={(e) => {
              updateData(e);
            }}
            type=""
            name="phone"
            value={data.phone}
            placeholder="Phone"
          />
          <input
            className="input-field"
            onChange={(e) => {
              updateData(e);
            }}
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
          />
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
