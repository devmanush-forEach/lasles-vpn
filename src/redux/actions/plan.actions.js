export const actionTypes = {
  SET_PLAN: "SET_PLAN",
};

export const set_Plan = (payload) => {
  return {
    type: actionTypes.SET_PLAN,
    payload,
  };
};
