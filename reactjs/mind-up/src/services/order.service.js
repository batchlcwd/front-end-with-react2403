// order service

import { privateAxios } from "../config/axios.config";
import { PAYMENT_STATUS_PAID } from "../config/constants";

//get orders by userid and status

export const getOrdersByUserIdAndStatus = async (
  userId,
  status = PAYMENT_STATUS_PAID
) => {
  const response = await privateAxios.get(
    `/orders/user/${userId}/status/${status}`
  );
  return response.data;
};
