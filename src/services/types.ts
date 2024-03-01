export interface BaseProduct {
  name: string;
  price: string;
}

export interface Product extends BaseProduct {
  id: string;
  createdAt: string;
}
