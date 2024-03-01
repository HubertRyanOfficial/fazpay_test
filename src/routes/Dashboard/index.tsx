import Header from "@/components/Header";
import ProductWrapper from "./components/ProductWrapper";

export default function Dashboard() {
  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-gray-50">
      <Header />
      <main className="w-full h-[94vh] flex flex-col justify-center items-center">
        <ProductWrapper />
      </main>
    </div>
  );
}
