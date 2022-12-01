import { combineReducers } from "redux";
import { notificationBarReducer } from "./notificationBar.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  notification: notificationBarReducer,
});

export default rootReducer;
