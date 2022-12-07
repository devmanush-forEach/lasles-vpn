import { useState } from "react";
import "./UserProfile.css";
import { FaUserEdit } from "@react-icons/all-files/fa/FaUserEdit.esm";
import { useDispatch, useSelector } from "react-redux";
import { set_User } from "../../redux/actions/user.actions";
import { axiosPost } from "../../common/axiosRequests";
import Navbar from "../navbar/Navbar";
import { show_Notification } from "../../redux/actions/notificationBar.actions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [edit, setEdit] = useState(true);

  const [data, setData] = useState(user);

  const updateData = (e) => {
    const ele = e.target;
    const name = ele?.name;
    const value = ele?.value;
    setData({ ...data, [name]: value });
  };

  const toggleIsEdit = () => {
    setEdit(!edit);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const { data: updated } = await axiosPost("/user/update", data);
      dispatch(set_User(updated));
      dispatch(show_Notification({ message: "User updated successfully." }));
      setEdit(true);
    } catch (error) {
      dispatch(show_Notification({ message: "ERR_CONNECTION_REFUSED" }));
    }
  };

  return (
    <>
      <Navbar />
      <div className="user_profile_main">
        <div>
          <div className="user_dp">
            <img
              src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png"
              alt=""
            />
          </div>
          <div className="user_info_div">
            <div onClick={toggleIsEdit} className="edit_icon_div">
              <FaUserEdit className="edit_icon" />
            </div>
            <form className="user_edit_form">
              <input
                disabled={edit}
                className="disabled_input"
                onChange={(e) => {
                  updateData(e);
                }}
                type=""
                name="name"
                // value={data.name}
                defaultValue={user?.name}
                placeholder="Name"
              />
              <input
                disabled={edit}
                className="disabled_input"
                onChange={(e) => {
                  updateData(e);
                }}
                type=""
                name="email"
                // value={data.email}
                defaultValue={user?.email}
                placeholder="Email"
              />
              <input
                disabled={edit}
                className="disabled_input"
                onChange={(e) => {
                  updateData(e);
                }}
                type=""
                name="phone"
                // value={data.phone}
                defaultValue={user?.phone}
                placeholder="Phone"
              />
              {/* <input
              disabled={edit}
              className="disabled_input"
              onChange={(e) => {
                updateData(e);
              }}
              type="password"
              name="password"
              value={data.password}
              placeholder="Password"
            /> */}
              {!edit && (
                <>
                  <button
                    onClick={updateUser}
                    className="update_btn get-start-btn"
                  >
                    Update
                  </button>
                  <div className="cancel_btn">
                    <button
                      onClick={toggleIsEdit}
                      className="update_btn get-start-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </form>
            {/* <div className="name">Nikhil shakya</div>
            <div className="about">hello i am nikhi sdkjsdh</div>
            <div className="email">hello i am nikhi sdkjsdh</div>
          <div className="phone">hello i am nikhi sdkjsdh</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
