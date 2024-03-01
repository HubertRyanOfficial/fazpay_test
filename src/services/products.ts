import api from "@/constants/api";

interface BaseProduct {
  name: string;
  price: string;
}

export interface Product extends BaseProduct {
  id: string;
  createdAt: string;
}

export const getProducts = async () => {
  const response = await api.get<Product[]>(`/products`);
  return response.data;
};

export const postProduct = async (data: BaseProduct) => {
  await api.post("/products", JSON.stringify(data));
  return;
};

export const putProduct = async (id: string, data: BaseProduct) => {
  await api.put(`/products/${id}`, JSON.stringify(data));
  return;
};
