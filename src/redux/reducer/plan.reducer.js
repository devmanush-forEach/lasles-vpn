import { actionTypes } from "../actions/plan.actions";
const initialState = { plan: null };

const planReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PLAN:
      return {
        ...state,
        plan: {
          title: payload.title,
          price: payload.price,
          points: [...payload.points],
          quality: payload.quality,
        },
      };

    default:
      return state;
  }
};

export default planReducer;
