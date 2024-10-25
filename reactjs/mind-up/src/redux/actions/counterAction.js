//constant values for actions types
export const COUNTER_INCREASE_ACTION_TYPE = "counter/increase";
export const COUNTER_DECREASE_ACTION_TYPE = "counter/decrease";
export const COUNTER_RESET_ACTION_TYPE = "counter/reset";
export const COUNTER_SET_ACTION_TYPE = "counter/set";

//actions
export const increaseCount = () => ({ type: COUNTER_INCREASE_ACTION_TYPE });
export const decreaseCount = () => ({ type: COUNTER_DECREASE_ACTION_TYPE });
export const resetCount = () => ({ type: COUNTER_RESET_ACTION_TYPE });
export const setCount = (value) => ({
  type: COUNTER_RESET_ACTION_TYPE,
  payload: value,
});
