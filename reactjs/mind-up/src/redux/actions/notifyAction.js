export const NOTIFY_ADD_ACTION_TYPE = "notification/add";

export const addNotification = (notification) => ({
  type: NOTIFY_ADD_ACTION_TYPE,
  payload: notification,
});
