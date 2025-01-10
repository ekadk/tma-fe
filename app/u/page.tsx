import { tasks } from "@/lib/dummy";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";

export default function DashboardPage() {
  return (
    <main className="px-20 py-10 flex flex-col gap-8">
      <h1 className="font-black text-2xl">Tasks Overview</h1>
      <DataTable columns={columns} data={tasks} />
    </main>
  );
}
