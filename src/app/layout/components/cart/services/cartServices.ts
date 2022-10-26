import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;

export const sendCartInfo = async (cart: any, token: string) => {
  try {
    return await axios({
      method: "post",
      url: `${API_URL}${endpoints.products.cart}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: cart,
    });
  } catch (err) {
    return err;
  }
};
