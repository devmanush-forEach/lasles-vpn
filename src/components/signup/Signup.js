import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isError, setIsError] = useState(false);

  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    console.log(ele.name);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/signup", data, {
      withCredentials: true,
      mode: "no-cors",
    });
    console.log(res);

    if (res.status === 201) {
      navigate("/");
    } else {
      setIsError(true);
    }
  };

  return (
    <>
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
