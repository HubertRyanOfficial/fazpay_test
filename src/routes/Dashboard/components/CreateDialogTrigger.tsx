import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useDashboard } from "@/contexts/DashboardContext";
import { postProduct } from "@/services/products";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useCallback, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function CreateDialogTrigger({ children }: Props) {
  const { toast } = useToast();
  const { refreshProduct } = useDashboard();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleCreateProduct = useCallback(async () => {
    setLoading(true);

    try {
      await postProduct({ name, price });
      await refreshProduct();
      toast({
        title: "Product created",
        description: "Your new product was added to product list.",
      });
    } catch (error) {
      toast({
        title: "Ops!",
        description: "Error when creating a new product.",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }, [name, price]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create product</DialogTitle>
          <DialogDescription>
            Create your new procut here. Click save when you're done.
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
              placeholder="Name"
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
              placeholder="Price"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={loading}
            type="submit"
            onClick={handleCreateProduct}
          >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
