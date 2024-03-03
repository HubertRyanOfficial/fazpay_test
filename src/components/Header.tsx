import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/firebase-config";
import { useCallback } from "react";
import { signOut } from "firebase/auth";
import { Button } from "./ui/button";

export default function Header() {
  const handleSignOut = useCallback(async () => {
    await signOut(auth);
  }, []);

  return (
    <header className="bg-white h-[6vh] px-8 flex flex-row items-center justify-end shadow-sm ">
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">{auth.currentUser?.email}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-4">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
