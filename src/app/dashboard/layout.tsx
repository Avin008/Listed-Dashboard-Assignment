"use client";
import { ContactMenu, Navbar, Sidebar } from "@/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });

  if (!session?.user) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <ClipLoader />
      </div>
    );
  }

  return (
    <main className="grid min-h-screen grid-cols-10 bg-[#F5F5F5] p-4">
      <div className="relative col-span-2">
        <div className="sticky top-5 h-[33rem] rounded-3xl bg-black x_sm:hidden xl:block">
          <Sidebar />
          <ContactMenu />
        </div>
      </div>
      <div className="x_sm:col-span-10 xl:col-span-8">{children}</div>
    </main>
  );
};

export default DashboardLayout;
