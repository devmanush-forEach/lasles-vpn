export const actionTypes = {
  SHOW_NOTIFICATION: "SHOW_NOTIFICATION",
  HIDE_NOTIFICATION: "HIDE_NOTIFICATION",
};

export const show_Notification = (payload) => {
  return {
    type: actionTypes.SHOW_NOTIFICATION,
    payload,
  };
};

export const hide_Notification = (payload) => {
  return {
    type: actionTypes.HIDE_NOTIFICATION,
    payload,
  };
};
