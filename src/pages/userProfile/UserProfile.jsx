import { useEffect, useState } from "react";
import "./UserProfile.css";
import { FaUserEdit } from "@react-icons/all-files/fa/FaUserEdit.esm";
import { RiEdit2Fill } from "@react-icons/all-files/ri/RiEdit2Fill";
import { useDispatch, useSelector } from "react-redux";
import { set_User } from "../../redux/actions/user.actions";
import { axiosPost } from "../../common/axiosRequests";
import { show_Notification } from "../../redux/actions/notificationBar.actions";
import { getImageUrl, uploadImage } from "../../common/firebase/functions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [userProfile, setUserProfile] = useState("");
  const [newProfile, setNewProfile] = useState(null);
  const [showdd, setShowdd] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      const url = await getImageUrl(user?.profile);
      setUserProfile(url);
    };
    getUrl();
  }, [user]);

  const [edit, setEdit] = useState(false);

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
      const toUpdate = { ...data };
      if (newProfile !== null) {
        const imgUrl = await uploadImage(newProfile);
        toUpdate.profile = imgUrl;
      }

      const { data: updated } = await axiosPost("/user/update", toUpdate);
      dispatch(set_User(updated));
      dispatch(show_Notification({ message: "User updated successfully." }));
      setEdit(false);
      setShowdd(false);
    } catch (error) {
      dispatch(show_Notification({ message: "ERR_CONNECTION_REFUSED" }));
    }
  };

  const toggledd = () => {
    setShowdd(!showdd);
  };

  const handleRemoveProfile = () => {
    dispatch(set_User({ ...user, profile: null }));
    setData({ ...data, profile: null });
  };

  const handleUploadPhoto = () => {
    document.getElementById("profile_upload").click();
  };

  const handleProfileChange = ({ target }) => {
    if (target.files.length > 0) {
      setNewProfile(target.files[0]);
      setUserProfile(URL.createObjectURL(target.files[0]));
    }
  };

  return (
    <>
      <div className="user_profile_main">
        <div>
          {user?.subscibedPlan && (
            <>
              <div className="user_plan_title_div">
                {`${user?.subscibedPlan?.title.split(" ")[0]} User`}
              </div>
            </>
          )}
          <div className="user_dp">
            <div>
              <img
                src={
                  userProfile
                    ? userProfile
                    : "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-person-user-19.png"
                }
                alt=""
              />
              {edit && (
                <button
                  onClick={toggledd}
                  className="profile_edit_btn get-start-btn"
                >
                  <span>
                    <RiEdit2Fill />
                  </span>
                  Edit
                </button>
              )}
              {showdd && (
                <div className="profile_edit_option_dd">
                  <button onClick={handleUploadPhoto}>Upload A Photo</button>
                  <input
                    id="profile_upload"
                    type="file"
                    placeholder="Upload aphoto"
                    hidden
                    onChange={handleProfileChange}
                  />
                  <button onClick={handleRemoveProfile}>Remove photo</button>
                </div>
              )}
            </div>
          </div>
          <div className="user_info_div">
            <div onClick={toggleIsEdit} className="edit_icon_div">
              <FaUserEdit className="edit_icon" />
            </div>
            <form className="user_edit_form">
              <input
                disabled={!edit}
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
                disabled={!edit}
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
                disabled={!edit}
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

              {edit && (
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
                      className="cancel-btn update_btn get-start-btn "
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
