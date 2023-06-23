"use client";
import { ContactMenu, Navbar, Sidebar } from "@/components";
import { useSession } from "next-auth/react";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  const { data: session } = useSession({ required: true });

  if (!session?.user) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-xl">Please Sign In to continue</h1>
        <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <main className="grid min-h-screen grid-cols-10 bg-[#F5F5F5] p-4">
      <div className="relative col-span-2">
        <div className="sticky top-5 h-[33rem] rounded-3xl bg-black">
          <Sidebar />
          <ContactMenu />
        </div>
      </div>
      <div className="col-span-8">{children}</div>
    </main>
  );
};

export default DashboardLayout;
