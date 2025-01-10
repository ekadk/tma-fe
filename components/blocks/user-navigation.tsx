import { Button } from "../ui/button";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menu = [
  {
    label: "Overview",
    link: "/",
  },
  {
    label: "Project Settings",
    link: "/",
  },
];
const UserNavbar = () => {
  return (
    <div className="w-full border-b border-gray-100 flex justify-between h-16 items-center px-8">
      <div className="flex items-center">
        <Button variant="ghost" className="font-bold">
          TASK MANAGEMENT APP
        </Button>
        {menu.map((menuItems, idx) => (
          <Button variant="ghost" key={idx}>
            <Link href={menuItems.link}>{menuItems.label}</Link>
          </Button>
        ))}
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>ED</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export { UserNavbar };
