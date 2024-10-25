import {
  COUNTER_DECREASE_ACTION_TYPE,
  COUNTER_INCREASE_ACTION_TYPE,
  COUNTER_RESET_ACTION_TYPE,
  COUNTER_SET_ACTION_TYPE,
} from "../actions/counterAction";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  //logic:
  switch (action.type) {
    case COUNTER_INCREASE_ACTION_TYPE:
      return { ...state, count: state.count + 1 };
    case COUNTER_DECREASE_ACTION_TYPE:
      return { ...state, count: state.count - 1 };
    case COUNTER_RESET_ACTION_TYPE:
      return { ...state, count: 0 };
    case COUNTER_SET_ACTION_TYPE:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
