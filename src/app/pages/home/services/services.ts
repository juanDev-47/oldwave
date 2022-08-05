import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;
console.log("url from services: ", API_URL);

export const getAllProducts = async (productName) => {
  try {
    return await axios.get(
      `${API_URL}${endpoints.products.list}`,
      {
        params: { contract: productName, pageNumber: 1, pageSize: 10 },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getProductByCategory = async (categoryId) => {
  // console.log("categoryId from services: ", categoryId);
  try {
    return await axios.get(
      `${API_URL}${endpoints.products.category}${categoryId}/category`,
      {
        params: { categoryId: categoryId, pageNumber: 1, pageSize: 10 },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentProducts = async () => {
  try {
    return await axios.get(
      `${API_URL}${endpoints.products.current}`
    );
  } catch (err) {
    console.log(err);
  }
};
