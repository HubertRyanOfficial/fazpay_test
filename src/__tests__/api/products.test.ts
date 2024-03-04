import api from "@/constants/api";
import { getProducts, postProduct, putProduct } from "@/services/products";
import MockAdapter from "axios-mock-adapter";

const axiosMock = new MockAdapter(api);

describe("Managing product endpoint", () => {
  it("should return all products", async () => {
    const mockProductList = [
      {
        id: 1,
        name: "Product 1",
        createdAt: "2024-03-03T12:00:00Z",
        price: 10.99,
      },
      {
        id: 2,
        name: "Product 2",
        createdAt: "2024-03-03T13:00:00Z",
        price: 20.99,
      },
    ];

    axiosMock.onGet().reply(200, mockProductList);
    const products = await getProducts();

    expect(products).toEqual(mockProductList);
  });

  it("should return the new product created", async () => {
    const mockProduct = {
      id: 1,
      name: "Product 1",
      createdAt: "2024-03-03T12:00:00Z",
      price: 10.99,
    };

    axiosMock.onPost().reply(200, mockProduct);
    const product = await postProduct({ name: "Product 1", price: "10.99" });

    expect(product).toEqual(mockProduct);
  });

  it("should return the  product edited", async () => {
    const mockProduct = {
      id: 1,
      name: "Product 1",
      createdAt: "2024-03-03T12:00:00Z",
      price: 19,
    };

    axiosMock.onPut().reply(200, mockProduct);
    const product = await putProduct("1", { name: "Product 2", price: "19" });

    expect(product).toEqual(mockProduct);
  });
});
