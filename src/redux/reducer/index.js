import { combineReducers } from "redux";
import { notificationBarReducer } from "./notificationBar.reducer";
import planReducer from "./plan.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationBarReducer,
  plan: planReducer,
});

export default rootReducer;
