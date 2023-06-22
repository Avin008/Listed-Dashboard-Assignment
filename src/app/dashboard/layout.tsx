import { ContactMenu, Sidebar } from "@/components";

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <main className="relative grid h-screen grid-cols-10">
      <div className="col-span-2 bg-[#000000]">
        <Sidebar />
        <ContactMenu />
      </div>
      <div className="col-span-8 border border-black"></div>
    </main>
  );
};

export default DashboardLayout;
