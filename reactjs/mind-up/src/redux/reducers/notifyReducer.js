import { NOTIFY_ADD_ACTION_TYPE } from "../actions/notifyAction";

const initialState = {
  notifications: [],
};

function notifyReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_ADD_ACTION_TYPE:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };

    default:
      return state;
  }
}

export default notifyReducer;
