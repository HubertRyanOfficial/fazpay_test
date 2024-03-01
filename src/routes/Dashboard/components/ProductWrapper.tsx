import Loader from "@/components/Loader";
import ProductList from "./ProductList";
import { useDashboard } from "@/contexts/DashboardContext";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { CreateDialogTrigger } from "./CreateDialogTrigger";

export default function ProductWrapper() {
  const { loading, products } = useDashboard();

  if (loading) {
    return <Loader color="#000000" />;
  }

  if (products.length === 0) {
    return (
      <>
        <h1 className="text-5xl font-bold">Create new product</h1>
        <div className="mt-8">
          <CreateDialogTrigger>
            <Button>
              <PlusIcon className="mr-2" /> Create Product
            </Button>
          </CreateDialogTrigger>
        </div>
      </>
    );
  }

  return (
    <div className="w-full max-w-[1100px] m-auto">
      <ProductList />
    </div>
  );
}
