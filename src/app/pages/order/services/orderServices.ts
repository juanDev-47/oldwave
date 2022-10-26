import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;

export const GetOrders = async (token: string, email: Object) => {
  try {
    const response = await axios({
      method: "post",
      url: `${API_URL}${endpoints.products.order}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: email,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
