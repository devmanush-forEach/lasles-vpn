import { actionTypes } from "../actions/user.actions";
const initialState = { user: null };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_USER:
      const user = {
        name: payload.name,
        email: payload.email,
        profile: payload.profile,
        phone: payload.phone,
      };
      return { ...state, user: user };

    default:
      return state;
  }
};

export default userReducer;
