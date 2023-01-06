import { axiosGet } from "../../common/axiosRequests";
import { show_Notification } from "./notificationBar.actions";

export const actionTypes = {
  SET_PLAN: "SET_PLAN",
  SET_PURCHASE_PLAN: "SET_PURCHASE_PLAN",
};

export const set_Plan = (payload) => {
  return {
    type: actionTypes.SET_PLAN,
    payload,
  };
};

export const set_puchase_Plan = (payload) => {
  return {
    type: actionTypes.SET_PURCHASE_PLAN,
    payload,
  };
};

export const get_Plans = () => {
  return async (dispatch) => {
    const { status, data } = await axiosGet("/plan");
    if (status === !200) {
      dispatch(
        show_Notification({
          message: "Forbidden user Please Login.",
          isError: true,
        })
      );
    }

    dispatch(set_Plan(data.plans));
  };
};
