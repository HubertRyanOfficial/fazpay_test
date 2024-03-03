import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductList from "../routes/Dashboard/components/ProductList";

const productsMock = [
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

jest.mock("../contexts/DashboardContext", () => ({
  useDashboard: jest.fn(() => ({
    products: productsMock,
    refreshProduct: jest.fn(),
  })),
}));

jest.mock("../components/ui/use-toast", () => ({
  useToast: jest.fn(() => ({
    toast: jest.fn(),
  })),
}));

jest.mock("axios");

describe("ProductList", () => {
  it("renders the component and interacts with it", async () => {
    render(<ProductList />);

    expect(screen.getByPlaceholderText("Filter name...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Filter name..."), {
      target: { value: "Product 1" },
    });

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.queryByText("Product 2")).not.toBeInTheDocument();
  });

  it("renders the component with create product form", async () => {
    render(<ProductList />);
    expect(screen.getByText("Create a new product")).toBeInTheDocument();

    await waitFor(() =>
      fireEvent.click(screen.getByText("Create a new product"))
    );

    expect(screen.getByText("Create product")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "Product 3" },
    });

    fireEvent.change(screen.getByPlaceholderText("Price"), {
      target: { value: 4 },
    });

    await waitFor(() => fireEvent.click(screen.getByText("Create")));
  });
});
