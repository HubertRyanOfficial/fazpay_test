import api from "@/constants/api";
import { BaseProduct, Product } from "./types";

export const getProducts = async () => {
  const response = await api.get<Product[]>(`/products`);
  return response.data;
};

export const postProduct = async (data: BaseProduct) => {
  const response = await api.post("/products", JSON.stringify(data));
  return response.data;
};

export const putProduct = async (id: string, data: BaseProduct) => {
  const response = await api.put(`/products/${id}`, JSON.stringify(data));
  return response.data;
};

export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
  return;
};
