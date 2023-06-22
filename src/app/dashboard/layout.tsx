const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <main className="grid h-screen grid-cols-10">
      <div className="col-span-2 border border-black"></div>
      <div className="col-span-8 border border-black"></div>
    </main>
  );
};

export default DashboardLayout;
