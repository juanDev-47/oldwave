import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;

export const sendCartInfo = async (cart: any) => {
  try {
    return await axios.post(
      `${API_URL}${endpoints.products.cart}`, cart      
    );
  } catch (err) {
    return err;
  }
};