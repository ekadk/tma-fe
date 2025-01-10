import { UserNavbar } from "@/components/blocks/user-navigation";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen container mx-auto border-x border-gray-100 w-full">
      <UserNavbar />
      {children}
    </div>
  );
}
