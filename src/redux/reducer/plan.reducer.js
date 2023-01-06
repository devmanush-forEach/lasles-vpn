import { actionTypes } from "../actions/plan.actions";
const initialState = { plan: null };

const planReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PLAN:
      return {
        ...state,
        plans: payload,
      };
    case actionTypes.SET_PURCHASE_PLAN:
      return {
        ...state,
        plan: payload,
      };

    default:
      return state;
  }
};

export default planReducer;
