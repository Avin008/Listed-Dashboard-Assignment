import { ContactMenu, Navbar, Sidebar } from "@/components";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
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
