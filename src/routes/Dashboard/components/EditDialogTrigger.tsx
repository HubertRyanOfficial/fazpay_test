import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useDashboard } from "@/contexts/DashboardContext";
import { Product, postProduct, putProduct } from "@/services/products";
import { ReloadIcon } from "@radix-ui/react-icons";
import { memo, useCallback, useState } from "react";

interface Props {
  children: React.ReactNode;
  product: Product;
}

function EditDialogTrigger({ children, product }: Props) {
  const { toast } = useToast();
  const { refreshProduct } = useDashboard();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(product.name || "");
  const [price, setPrice] = useState(product.price || "");

  const handleEditProduct = useCallback(async () => {
    setLoading(true);

    try {
      await putProduct(product.id, { name, price });
      await refreshProduct();
      toast({
        title: "Product edited",
        description: "Your  product was edited.",
      });
    } catch (error) {
      toast({
        title: "Ops!",
        description: "Error when edting this product.",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }, [name, price]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
          <DialogDescription>
            Make changes in your procut here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button disabled={loading} type="submit" onClick={handleEditProduct}>
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { EditDialogTrigger };
