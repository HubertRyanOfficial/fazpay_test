import Loader from "@/components/Loader";
import ContentsList from "./ContentsList";
import { useDashboard } from "@/contexts/DashboardContext";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function ContentsWrapper() {
  const { loading, products } = useDashboard();

  if (loading) {
    return <Loader color="#000000" />;
  }

  if (products.length === 0) {
    return (
      <>
        <h1 className="text-5xl font-bold">Create new product</h1>
        <div className="mt-8">
          <Button onClick={() => {}}>
            <PlusIcon className="mr-2" /> Create Product
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="w-full max-w-[1100px] m-auto">
      <ContentsList />
    </div>
  );
}
