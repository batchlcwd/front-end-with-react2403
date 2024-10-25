import { combineReducers } from "redux";

import counterReducer from "../reducers/counterReducer";
import notifyReducer from "../reducers/notifyReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  notify: notifyReducer,
});

export default rootReducer;
