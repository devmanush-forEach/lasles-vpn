import { actionTypes } from "../actions/notificationBar.actions";

const initialState = {
  hide: true,
  messsage: "",
  isError: false,
  autohide: true,
};

export const notificationBarReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case actionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        hide: false,
        message: payload?.message,
        isError: payload?.isError ? payload.isError : false,
        autohide: payload?.autohide ? payload.autohide : true,
      };
    case actionTypes.HIDE_NOTIFICATION:
      return { ...state, hide: true };

    default:
      return state;
  }
};
