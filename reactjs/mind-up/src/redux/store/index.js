//import { combineReducers, createStore } from "redux";
//import rootReducer from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import notifyReducer from "../slice/notifySlice";
//create store with reducer
//const store = createStore(rootReducer);

//export default store;

const store = configureStore({
  reducer: {
    // all the reducers comes here
    counter: counterReducer,
    notify: notifyReducer,
  },
});

export default store;
