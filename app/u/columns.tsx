"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

enum TASK_STATUS {
  BACKLOG,
  TODO,
  IN_PROGRESS,
  DONE,
  CANCELED,
}

enum TASK_PRIORITY {
  LOW,
  MEDIUM,
  HIGH,
}

export type Task = {
  id: number;
  name: string;
  status: TASK_STATUS;
  priority: TASK_PRIORITY;
};
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Tasks",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      if (status === 0) return "Backlog";
      if (status === 1) return "Todo";
      if (status === 2) return "In Progress";
      if (status === 3) return "Done";
      if (status === 4) return "Canceled";
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority");
      if (priority === 0) return "Low";
      if (priority === 1) return "Medium";
      if (priority === 2) return "High";
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(`${task.name}`)}>
              Copy Task Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
