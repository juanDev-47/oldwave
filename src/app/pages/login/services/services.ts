import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
  console.log("credentials from services: ", credentials);
  try {
    return await axios.post(
      `${API_URL}${endpoints.products.login}`,credentials
    );
  } catch (err) {
    console.log(err);
  }
};