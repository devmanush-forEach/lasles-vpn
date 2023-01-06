import { axiosGet } from "../../common/axiosRequests";
import { show_Notification } from "./notificationBar.actions";

export const actionTypes = {
  SET_USER: "SET_USER",
};

export const set_User = (payload) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};
export const get_User = () => {
  return async (dispatch) => {
    const { status, data } = await axiosGet("/user");
    if (status === !200) {
      dispatch(
        show_Notification({
          message: "Forbidden user Please Login.",
          isError: true,
        })
      );
    }

    const payload = data.user;

    dispatch(set_User(payload));
  };
};
