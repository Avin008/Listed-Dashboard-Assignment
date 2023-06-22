import { ContactMenu, Navbar, Sidebar } from "@/components";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <main className="grid min-h-screen grid-cols-10 bg-[#F5F5F5]">
      <div className="col-span-2 bg-[#000000]">
        <Sidebar />
        <ContactMenu />
      </div>
      <div className="col-span-8">{children}</div>
    </main>
  );
};

export default DashboardLayout;
