import { combineReducers, createStore } from "redux";
import rootReducer from "../reducers";

//create store with reducer
const store = createStore(rootReducer);

export default store;
