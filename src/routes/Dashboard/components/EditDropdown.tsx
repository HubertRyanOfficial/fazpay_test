import { DotsHorizontalIcon, ReloadIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EditDialogTrigger } from "./EditDialogTrigger";
import { DialogTrigger } from "@/components/ui/dialog";

import { deleteProduct } from "@/services/products";
import type { Product } from "@/services/types";
import { useCallback, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useDashboard } from "@/contexts/DashboardContext";

interface Props {
  product: Product;
}

export default function EditDropdown({ product }: Props) {
  const [deleting, setDeleting] = useState(false);

  const { toast } = useToast();
  const { refreshProduct } = useDashboard();

  const handleDeleteProduct = useCallback(async () => {
    setDeleting(true);

    try {
      await deleteProduct(product.id);
      await refreshProduct();
      toast({
        title: "Product delete",
        description: "Your product was deleted.",
      });
    } catch (error) {
      toast({
        title: "Ops!",
        description: "Error when edting this product.",
      });
    } finally {
      setDeleting(false);
    }
  }, [product]);

  return (
    <EditDialogTrigger product={product}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DialogTrigger asChild>
            <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            onClick={handleDeleteProduct}
            className="text-red-500"
            disabled={deleting}
          >
            {deleting && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </EditDialogTrigger>
  );
}
