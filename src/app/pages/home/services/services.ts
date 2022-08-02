import axios from "axios";
// @ts-ignore
import { endpoints } from "../../../config/endpoints.ts";
const API_URL = process.env.REACT_APP_API_URL;
console.log("url from services: ", API_URL);

export const getAllProducts = async (productName) => {
  try {
    const products = await axios.get(
      `${API_URL}${endpoints.products.list}`,
      {
        params: { contract: productName, pageNumber: 1, pageSize: 10 },
      }
    ).then((data) => {
      return data.data;
    });

    console.log(products);
    return {products};
  } catch (err) {
    console.log(err);
  }
};

// export const getProductById = async (produtId) => {
//     return await axios.get(`${API_URL_ITEMS}/${produtId}`)
// }
