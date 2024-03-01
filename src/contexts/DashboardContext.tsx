"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Toaster } from "@/components/ui/toaster";
import { Product, getProducts } from "@/services/products";

interface DashboardContextProps {
  children: React.ReactNode;
}

interface DashboardContextType {
  products: Product[];
  loading: boolean;
  refreshProduct: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextType>({} as any);

export function DashboardProvider({ children }: DashboardContextProps) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleGetProducts = useCallback(async () => {
    try {
      const allProducts = await getProducts();
      setProducts(allProducts);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <DashboardContext.Provider
      value={{ products, loading, refreshProduct: handleGetProducts }}
    >
      {children}
      <Toaster />
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);
